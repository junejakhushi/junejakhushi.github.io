---
title: The reflection step that did not work
year: 2026
status: Research
featured: true
order: 3
summary: I added reflection to an AI tutor, measured it honestly, and it did not improve performance.
categories: ["Research & Data"]
tags: ["Research", "Learning Analytics", "NLP"]
builtWith: ["Python", "NLP", "R"]
monogram: OAK
finding:
  title: Reflection changed behaviour. It did not change performance.
  caption: "Change under the reflection condition versus comparison, in an AI-assisted Python tutoring study. Bars extend right for an increase and left for a decrease. Values are approximate."
  takeaway: "Practice iterations predicted final performance better than time spent on feedback, so a reflection scaffold should drive more practice, not just more attention."
  note: "A finding within this study and population, not a general causal claim about reflection."
  measures:
    - label: Time on feedback
      change: 100
      display: about 2x
      kind: increase
    - label: Practice iterations
      change: -40
      display: about -40%
      kind: decrease
    - label: Performance
      change: 0
      display: no measurable gain
      kind: none
---

## Overview

For the OAK Lab I added a reflection step to an AI Python tutor and measured what it actually did. It changed behaviour and did not change performance, which is the interesting part.

## My role

Research assistant at the Optimized Algorithms and Knowledge (OAK) Lab.

## Problem

Reflection prompts are widely assumed to help learning. This study asked whether that assumption held for an AI-assisted Python tutor, and measured it instead of trusting it.

## What I built

A reflection prompt inside the tutoring study, plus an NLP pipeline that scores reflection depth, self-explanation, and error diagnosis from open-ended responses, against a human-labeled benchmark and with structured JSON output.

## Results / what I learned

The reflection condition roughly doubled time on feedback and cut practice iterations about 40%, with no performance gain. Practice iterations predicted final performance better than time on feedback did, which is close to the opposite of what a reflection scaffold is supposed to do. Building the thing was the easy half. Measuring it honestly, and believing the result instead of the story I wanted, was the work.
