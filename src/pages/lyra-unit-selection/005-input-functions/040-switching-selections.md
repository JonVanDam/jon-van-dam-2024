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

The Unit Selection Component can switch between selectable entries when the player chooses to do so. 

## Selecting units using a Gameplay Ability

If you are using a <span class="object">GA_UnitSelection</span> ability, simply activate it and select a unit from the widget that appears on screen.

![](../../../assets/lyra-unit-selection/pie-side.jpg)

You can also set an <span class="variable">Initial Selection</span> which will be activated on spawn, or set the first selection to be random. 

![](../../../assets/lyra-unit-selection/initial-selection-02.jpg)

## Selecting units directly on the Unit Selection Component

To make a selection directly on the Unit Selection Component, use the <span class="function">Update Selection</span> function.

![](../../../assets/lyra-unit-selection/update-selection.jpg)

Once a selection is made, it will be stored on the Unit Selection Component as the <span class="variable">Initial Selection</span>. It will be applied when function <span class="function">Apply Selection</span> is called. This can be done manually, but the component will take care of most use cases by default. To customize when to apply the selection, use the variables in the *Lifecycle* category on the Unit Selection Component.  

![](../../../assets/lyra-unit-selection/usc-lifecycle.jpg)

## Lyra Equipment system integration

Selected units are equipped on the pawn using [Lyra's equipment system](https://dev.epicgames.com/documentation/en-us/unreal-engine/lyra-inventory-and-equipment-in-unreal-engine).

<embed src="/pdf/lus-execution-flow.pdf" width="100%" height="420px" toolbar=0 frameborder="0" scrolling="no" />

