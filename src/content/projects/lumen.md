---
title: Lumen
year: 2026
status: Building
featured: true
order: 2
summary: Virtual jewellery try-on that renders a Delhi studio's real pieces, and forecasts what to make.
categories: ["Software & AI", "Product"]
tags: ["3D", "Computer Vision", "Forecasting", "Commerce"]
builtWith: ["Python", "Computer Vision"]
monogram: LU
---

## Overview

Lumen is a virtual jewellery try-on I built for a studio in Delhi. It renders their actual collection on a customer, and turns the try-on data into a decision about what to manufacture.

## My role

Builder.

## Problem

Most try-ons show generic assets and measure vanity metrics. The studio needed their real pieces on real customers, and a reason to care about the interaction data beyond engagement.

## What I built

The studio keeps its collection as STL files, so Lumen renders those exact pieces on a customer instead of stand-ins. Behind the try-on sits a demand-forecasting layer that reads which pieces people try on and linger over, and tells the studio which ones are worth manufacturing for inventory.

## Results / what I learned

The forecasting layer is the half I care about: it turns try-on interaction into a production decision instead of a vanity metric.
