/* ============================================================
   KJ Portfolio — Card Deck Engine
   Modules:
     1. DeckController  — main 5-card navigation state machine
     2. FlipController  — per-card 3D flip
     3. MiniDeckController — nested projects mini-deck
     4. ShuffleController  — fan + re-stack animation
     5. StatCounters    — animated number roll-up
     6. InputRouter     — wheel / swipe / keyboard → deck actions
   ============================================================ */

/* ── Section metadata (order matches DOM card order reversed) ── */
const SECTIONS = [
  { id: 'card-01', name: 'Identity'  },
  { id: 'card-02', name: 'Education' },
  { id: 'card-03', name: 'Experience'},
  { id: 'card-04', name: 'Projects'  },
  { id: 'card-05', name: 'Connect'   },
];

/* ── State values each card can be in ── */
const STATES = ['active', 'next-1', 'next-2', 'next-3', 'hidden', 'dealt'];

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const deck     = DeckController.init(prefersReduced);
  const flipCtrl = FlipController.init(deck);
  MiniDeckController.init();
  ShuffleController.init();
  StatCounters.init(prefersReduced);
  InputRouter.init(deck, flipCtrl);
});


/* ============================================================
   1. DECK CONTROLLER
   ============================================================ */
const DeckController = (() => {
  let cardEls    = [];   // DOM refs, index 0 = card-01 … 4 = card-05
  let active     = 0;    // current active card index
  let animating  = false;
  let isFlipped  = false;
  const ANIM_MS  = 460;  // safety timeout

  const SECTION_NAMES = SECTIONS.map(s => s.name);

  /* State assignment based on offset from active */
  function stateFor(cardIdx) {
    const offset = cardIdx - active;
    if (offset < 0)  return 'dealt';
    if (offset === 0) return 'active';
    if (offset === 1) return 'next-1';
    if (offset === 2) return 'next-2';
    if (offset === 3) return 'next-3';
    return 'hidden';
  }

  function applyStates() {
    cardEls.forEach((el, i) => {
      el.dataset.state = stateFor(i);
    });
    updateNav();
    updateExpScrollability();
  }

  function updateNav() {
    // Section name label
    const nameEl = document.getElementById('nav-section-name');
    if (nameEl) nameEl.textContent = SECTION_NAMES[active] || '';

    // Pip active states
    document.querySelectorAll('.nav-pip').forEach((pip, i) => {
      pip.classList.toggle('is-active', i === active);
      pip.setAttribute('aria-selected', String(i === active));
    });

    // Arrow buttons
    const prevBtn = document.getElementById('nav-prev');
    const nextBtn = document.getElementById('nav-next');
    if (prevBtn) prevBtn.disabled = active === 0;
    if (nextBtn) nextBtn.disabled = active === cardEls.length - 1;

    // Flip indicator visibility
    const flipInd = document.getElementById('flip-indicator');
    if (flipInd) {
      flipInd.style.opacity = isFlipped ? '0' : '0.7';
    }
  }

  /* When Experience card is active, allow inner scroll to work */
  function updateExpScrollability() {
    const expCard = document.getElementById('card-03');
    if (!expCard) return;
    const isActive = expCard.dataset.state === 'active';
    const expScroll = document.getElementById('exp-scroll');
    if (expScroll) {
      expScroll.style.pointerEvents = isActive ? 'auto' : 'none';
    }
  }

  function lockFor(ms) {
    animating = true;
    setTimeout(() => { animating = false; }, ms);
  }

  function advance() {
    if (animating || isFlipped || active >= cardEls.length - 1) return false;
    active++;
    applyStates();
    lockFor(ANIM_MS);
    return true;
  }

  function retreat() {
    if (animating || isFlipped || active <= 0) return false;
    active--;
    applyStates();
    lockFor(ANIM_MS);
    return true;
  }

  function goTo(idx) {
    if (idx < 0 || idx >= cardEls.length || idx === active) return;
    if (isFlipped) FlipController.unflip();
    active = idx;
    applyStates();
    lockFor(ANIM_MS);
  }

  function setFlipped(val) {
    isFlipped = val;
    updateNav();
  }

  function getActive()   { return active; }
  function isAnimating() { return animating; }
  function getCardEls()  { return cardEls; }

  function init(prefersReduced) {
    // DOM order is 05→01 (for stacking context), reverse so index 0 = card-01
    cardEls = Array.from(document.querySelectorAll('.deck-card')).reverse();
    if (!cardEls.length) return null;

    // On load card-01 is active, rest are hidden — set initial states
    applyStates();

    // Pip nav
    document.querySelectorAll('.nav-pip').forEach((pip, i) => {
      pip.addEventListener('click', () => goTo(i));
    });

    // Arrow nav buttons
    document.getElementById('nav-prev')?.addEventListener('click', retreat);
    document.getElementById('nav-next')?.addEventListener('click', advance);

    // Hero CTA buttons that jump to specific cards
    document.getElementById('goto-projects')?.addEventListener('click', () => goTo(3));
    document.getElementById('goto-connect')?.addEventListener('click', ()  => goTo(4));

    // Click on next-1 card area → advance
    document.querySelector('.deck-viewport')?.addEventListener('click', e => {
      const card = e.target.closest('.deck-card');
      if (card && card.dataset.state === 'next-1') advance();
    });

    return { advance, retreat, goTo, setFlipped, getActive, isAnimating, getCardEls, prefersReduced };
  }

  return { init };
})();


/* ============================================================
   2. FLIP CONTROLLER
   ============================================================ */
const FlipController = (() => {
  let deck = null;

  function flip(cardEl) {
    if (!cardEl) return;
    const isNowFlipped = !cardEl.classList.contains('is-flipped');
    cardEl.classList.toggle('is-flipped', isNowFlipped);

    // Toggle aria-hidden on faces
    const front = cardEl.querySelector('.card-face.front');
    const back  = cardEl.querySelector('.card-face.back');
    if (front) front.setAttribute('aria-hidden', String(isNowFlipped));
    if (back)  back.setAttribute('aria-hidden', String(!isNowFlipped));

    deck?.setFlipped(isNowFlipped);
  }

  function unflip() {
    const cardEls = deck?.getCardEls() || [];
    const active  = deck?.getActive()  ?? 0;
    const el      = cardEls[active];
    if (el?.classList.contains('is-flipped')) flip(el);
  }

  function init(deckRef) {
    deck = deckRef;

    // Flip buttons inside cards
    document.querySelectorAll('.flip-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation(); // don't bubble to deck-viewport click listener
        const card = btn.closest('.deck-card');
        if (card && card.dataset.state === 'active') flip(card);
      });
    });

    // Double-tap anywhere on the active card face (not on interactive elements)
    let lastTap = 0;
    document.querySelector('.deck-viewport')?.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      const card = e.target.closest('.deck-card');
      if (!card || card.dataset.state !== 'active') return;

      const now = Date.now();
      if (now - lastTap < 320) {
        flip(card);
        lastTap = 0;
      } else {
        lastTap = now;
      }
    });

    return { flip, unflip };
  }

  return { init, unflip };
})();


/* ============================================================
   3. MINI DECK CONTROLLER (Projects card)
   ============================================================ */
const MiniDeckController = (() => {
  let currentTab   = 'work';
  let currentIndex = 0;
  let animating    = false;
  const ANIM_MS    = 420;

  function getCards(tab) {
    return Array.from(
      document.querySelectorAll(`.mini-card[data-panel="${tab}"]`)
    );
  }

  function miniStateFor(cards, active, idx) {
    const offset = idx - active;
    if (offset < 0)  return 'hidden';
    if (offset === 0) return 'active';
    if (offset === 1) return 'depth-1';
    if (offset === 2) return 'depth-2';
    return 'hidden';
  }

  function applyMiniStates(tab, activeIdx) {
    // Hide all cards first
    document.querySelectorAll('.mini-card').forEach(c => {
      c.dataset.miniState = 'hidden';
      c.setAttribute('aria-hidden', 'true');
    });

    // Show only current tab cards
    const cards = getCards(tab);
    cards.forEach((c, i) => {
      c.dataset.miniState = miniStateFor(cards, activeIdx, i);
      c.setAttribute('aria-hidden', String(i !== activeIdx));
    });

    updateDots(tab, activeIdx);
    updateMiniButtons(tab, activeIdx);
  }

  function updateDots(tab, activeIdx) {
    const dotsEl = document.getElementById('mini-dots');
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    const cards = getCards(tab);
    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'mini-dot' + (i === activeIdx ? ' is-active' : '');
      dot.setAttribute('role', 'listitem');
      dot.setAttribute('aria-label', `Project ${i + 1} of ${cards.length}`);
      dot.addEventListener('click', () => goMini(i));
      dotsEl.appendChild(dot);
    });
  }

  function updateMiniButtons(tab, activeIdx) {
    const cards = getCards(tab);
    const prev  = document.getElementById('mini-prev');
    const next  = document.getElementById('mini-next');
    if (prev) prev.disabled = activeIdx === 0;
    if (next) next.disabled = activeIdx === cards.length - 1;
  }

  function goMini(idx) {
    if (animating) return;
    const cards = getCards(currentTab);
    if (idx < 0 || idx >= cards.length) return;
    animating = true;
    currentIndex = idx;
    applyMiniStates(currentTab, currentIndex);
    setTimeout(() => { animating = false; }, ANIM_MS);
  }

  function switchTab(tab) {
    if (tab === currentTab) return;
    currentTab  = tab;
    currentIndex = 0;
    applyMiniStates(currentTab, currentIndex);

    document.querySelectorAll('.proj-tab').forEach(t => {
      const isActive = t.dataset.tab === tab;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });
  }

  function init() {
    // Initial state
    applyMiniStates('work', 0);

    // Tab buttons
    document.querySelectorAll('.proj-tab').forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Prev / next
    document.getElementById('mini-prev')?.addEventListener('click', () => goMini(currentIndex - 1));
    document.getElementById('mini-next')?.addEventListener('click', () => goMini(currentIndex + 1));

    // Keyboard nav when inside the mini deck
    document.getElementById('card-04')?.addEventListener('keydown', e => {
      if (e.target.closest('.proj-tabs, .shuffle-btn, .flip-btn')) return;
      if (e.key === 'ArrowRight') { e.stopPropagation(); goMini(currentIndex + 1); }
      if (e.key === 'ArrowLeft')  { e.stopPropagation(); goMini(currentIndex - 1); }
    });

    // Touch swipe inside mini stage
    let touchX = null;
    const stage = document.getElementById('mini-stage');
    stage?.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    stage?.addEventListener('touchend', e => {
      if (touchX === null) return;
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goMini(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      touchX = null;
    }, { passive: true });

    return { goMini, switchTab, getCurrentIndex: () => currentIndex, getCurrentTab: () => currentTab, getCards };
  }

  return { init };
})();


/* ============================================================
   4. SHUFFLE CONTROLLER
   ============================================================ */
const ShuffleController = (() => {
  let shuffling = false;

  /* Fisher-Yates shuffle on an array copy */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getFanClass(idx, total) {
    if (total <= 3) return `fan3-${idx}`;
    return `fan-${idx}`;
  }

  function animate(tab) {
    if (shuffling) return;
    shuffling = true;

    const btn   = document.getElementById('shuffle-btn');
    const cards = Array.from(document.querySelectorAll(`.mini-card[data-panel="${tab}"]`));
    if (cards.length < 2) { shuffling = false; return; }

    btn?.classList.add('is-shuffling');

    // 1. Make all cards visible for fanning
    cards.forEach((c, i) => {
      c.dataset.miniState = 'active'; // remove hidden first
      void c.offsetWidth; // force reflow
    });

    // 2. Fan out
    cards.forEach((c, i) => {
      c.classList.add(getFanClass(i, cards.length));
    });

    // 3. After fan pause, re-stack in shuffled order
    setTimeout(() => {
      const shuffled = shuffle(cards);

      cards.forEach(c => {
        c.classList.remove('fan-0','fan-1','fan-2','fan-3','fan3-0','fan3-1','fan3-2');
      });

      // Reassign mini-index order
      shuffled.forEach((c, i) => {
        c.dataset.miniIndex = String(i);
      });

      // Stagger re-stack
      shuffled.forEach((c, i) => {
        setTimeout(() => {
          const offset = i;
          if (offset === 0) c.dataset.miniState = 'active';
          else if (offset === 1) c.dataset.miniState = 'depth-1';
          else if (offset === 2) c.dataset.miniState = 'depth-2';
          else c.dataset.miniState = 'hidden';
          c.setAttribute('aria-hidden', String(offset !== 0));
        }, i * 70);
      });

      setTimeout(() => {
        btn?.classList.remove('is-shuffling');
        shuffling = false;
        // Reset mini-deck controller's index
        MiniDeckController.init && document.getElementById('mini-dots') &&
          (() => {
            // Re-update dots to reflect new order starting at 0
            const dotsEl = document.getElementById('mini-dots');
            if (!dotsEl) return;
            dotsEl.innerHTML = '';
            shuffled.forEach((_, i) => {
              const dot = document.createElement('span');
              dot.className = 'mini-dot' + (i === 0 ? ' is-active' : '');
              dot.setAttribute('role', 'listitem');
              dot.setAttribute('aria-label', `Project ${i + 1} of ${shuffled.length}`);
              dotsEl.appendChild(dot);
            });
            const prev = document.getElementById('mini-prev');
            const next = document.getElementById('mini-next');
            if (prev) prev.disabled = true;
            if (next) next.disabled = shuffled.length <= 1;
          })();
      }, shuffled.length * 70 + 400);

    }, 260); // fan hold duration
  }

  function init() {
    document.getElementById('shuffle-btn')?.addEventListener('click', () => {
      const activeTab = document.querySelector('.proj-tab.is-active')?.dataset.tab || 'work';
      animate(activeTab);
    });
  }

  return { init };
})();


/* ============================================================
   5. STAT COUNTERS
   Animated number roll-up when experience card comes into view.
   ============================================================ */
const StatCounters = (() => {
  function animateCount(el, target, duration) {
    const start = performance.now();
    const step  = now => {
      const t = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
      el.textContent = Math.round(e * target);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function init(prefersReduced) {
    if (prefersReduced) return;

    const nums = document.querySelectorAll('.stat-num[data-target]');
    if (!nums.length) return;

    // Reset all to 0
    nums.forEach(el => { el.textContent = '0'; el._counted = false; });

    // Watch the experience card becoming active
    const card03 = document.getElementById('card-03');
    if (!card03) return;

    const io = new MutationObserver(() => {
      if (card03.dataset.state !== 'active') return;
      nums.forEach(el => {
        if (el._counted) return;
        el._counted = true;
        animateCount(el, parseInt(el.dataset.target, 10), 900);
      });
    });

    io.observe(card03, { attributes: true, attributeFilter: ['data-state'] });
  }

  return { init };
})();


/* ============================================================
   6. INPUT ROUTER
   Wheel / swipe / keyboard → deck advance or retreat.
   Experience card inner scroll is handled specially.
   ============================================================ */
const InputRouter = (() => {
  /* Wheel delta accumulator — prevents over-sensitive trackpads */
  let wheelAccum = 0;
  let wheelTimer = null;
  const WHEEL_THRESHOLD = 40;

  function canExpScrollDown(el) {
    return el.scrollTop + el.clientHeight < el.scrollHeight - 2;
  }
  function canExpScrollUp(el) {
    return el.scrollTop > 2;
  }

  function onWheel(e, deck, flipCtrl) {
    if (deck.isAnimating()) { e.preventDefault(); return; }

    const card03   = document.getElementById('card-03');
    const expScroll = document.getElementById('exp-scroll');
    const isExp    = card03 && card03.dataset.state === 'active';
    const isFlipped = card03?.classList.contains('is-flipped');

    // If experience card front is active with inner scroll, gate on scroll position
    if (isExp && !isFlipped && expScroll) {
      if (e.deltaY > 0 && canExpScrollDown(expScroll)) return; // let scroll happen
      if (e.deltaY < 0 && canExpScrollUp(expScroll))   return;
    }

    e.preventDefault();

    // Accumulate wheel delta with debounce reset
    wheelAccum += e.deltaY;
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { wheelAccum = 0; }, 150);

    if (Math.abs(wheelAccum) < WHEEL_THRESHOLD) return;
    const dir = wheelAccum > 0 ? 'next' : 'prev';
    wheelAccum = 0;

    if (dir === 'next') deck.advance();
    else deck.retreat();
  }

  /* Touch swipe */
  let touchStartX = 0;
  let touchStartY = 0;
  let dirLocked   = null; // 'h' | 'v' | null

  function onTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    dirLocked   = null;
  }

  function onTouchMove(e, deck) {
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;

    // Lock direction on first significant move
    if (!dirLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      dirLocked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
    }

    // If horizontal swipe locked, prevent scroll
    if (dirLocked === 'h') e.preventDefault();
  }

  function onTouchEnd(e, deck) {
    if (dirLocked !== 'h') return;
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) {
      if (dx > 0) deck.advance();
      else        deck.retreat();
    }
  }

  function onKeyDown(e, deck, flipCtrl) {
    // Don't capture keys when focus is inside interactive mini-deck elements
    if (e.target.closest('#card-04 .proj-tabs, #card-04 .mini-nav, #card-04 .shuffle-btn')) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
        e.preventDefault();
        deck.advance();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        deck.retreat();
        break;
      case ' ':
        // Space flips the active card
        e.preventDefault();
        {
          const cardEls = deck.getCardEls();
          const active  = deck.getActive();
          const el      = cardEls[active];
          if (el) FlipController.unflip ? flipCtrl.flip(el) : null;
        }
        break;
    }
  }

  function init(deck, flipCtrl) {
    if (!deck) return;

    const viewport = document.querySelector('.deck-viewport');

    viewport?.addEventListener('wheel', e => onWheel(e, deck, flipCtrl), { passive: false });

    viewport?.addEventListener('touchstart', onTouchStart, { passive: true });
    viewport?.addEventListener('touchmove', e => onTouchMove(e, deck), { passive: false });
    viewport?.addEventListener('touchend', e => onTouchEnd(e, deck), { passive: true });

    document.addEventListener('keydown', e => onKeyDown(e, deck, flipCtrl));
  }

  return { init };
})();
