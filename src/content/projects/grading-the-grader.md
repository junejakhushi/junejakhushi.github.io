---
title: Grading the grader
year: 2026
status: Research
featured: true
order: 4
summary: An evaluation harness that benchmarks LLM feedback against expert judgment, with failure-mode analysis.
categories: ["Research & Data", "Software & AI"]
tags: ["AI", "LLM Evaluation", "NLP"]
builtWith: ["Python", "NLP"]
monogram: GG
---

## Overview

An evaluation harness that benchmarks LLM-generated feedback against expert judgment, built to find where the model fails rather than to produce a single score.

## My role

Builder and researcher, at PLUS.

## Problem

AI writes a lot of feedback for students now. A single aggregate score hides the places where it is quietly wrong, which are exactly the places that matter.

## What I built

A harness that compares model output to expert annotation and surfaces category-level failure modes, so the output is a map of where feedback breaks down rather than one number.

## Results / what I learned

The failure-mode view is more useful than any single accuracy figure. It tells you what to fix, not just how you scored.
