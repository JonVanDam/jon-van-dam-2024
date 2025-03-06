---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Adding selectable entries
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 030
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

The Unit Selection Component can store a list of selectable entries the player can choose from. 

## Managing selectable units using a Gameplay Ability

If you are using a <span class="object">GA_UnitSelection</span> ability, you can change the available units by setting the <span class="variable">Selectable Units</span> variable.

![](../../../assets/lyra-unit-selection/selectable-units-var.jpg)

## Managing selectable units directly on the Unit Selection Component

To add or remove a selectable entry dyrectly on the Unit Selection Component, use the following functions on the Unit Selection Component:

* <span class="function">Add Selectable Unit</span>
* <span class="function">Remove Selectable Unit</span>

![](../../../assets/lyra-unit-selection/add-selectable-unit.jpg)

## Lyra Inventory system integration

Selectable units are stored in the inventory of the player, using [Lyra's inventory system](https://dev.epicgames.com/documentation/en-us/unreal-engine/lyra-inventory-and-equipment-in-unreal-engine).

<embed src="/pdf/lus-execution-flow.pdf" width="100%" height="420px" toolbar=0 frameborder="0" scrolling="no" />

The advantage of this approach, is that inventory items in Lyra are modular and consist of inventory fragments. These fragments can be used to add metadata or additional functionality to an item. These can be used to:

* [Add UI icons](/lyra-unit-selection/004-interface/120-ui-icons)
* [Add categories / classifications using gameplay tags](/lyra-unit-selection/004-interface/130-tags-categories)

