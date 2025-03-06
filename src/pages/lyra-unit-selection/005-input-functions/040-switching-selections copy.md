---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Switching selections
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 040
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

The Unit Selection Component can switch between selectable entries when the player chooes to do so. 

## Selecting units using a Gameplay Ability

If you are using a <span class="object">GA_UnitSelection</span> ability, simply activate it and select a unit from the widget that appears on screen.

![](../../../assets/lyra-unit-selection/unit-selection-ingame.jpg)

## Selecting units directly on the Unit Selection Component

To make a selection directly on the Unit Selection Component, use the following functions :

* <span class="function">Update Selection From Equipment Definition</span>
* <span class="function">Update Selection From Inventory Item</span>

![](../../../assets/lyra-unit-selection/update-selection.jpg)

## Lyra Equipment system integration

Selectable units are equipped on the pawn using [Lyra's equipment system](https://dev.epicgames.com/documentation/en-us/unreal-engine/lyra-inventory-and-equipment-in-unreal-engine).

<embed src="/pdf/lus-execution-flow.pdf" width="100%" height="420px" toolbar=0 frameborder="0" scrolling="no" />

