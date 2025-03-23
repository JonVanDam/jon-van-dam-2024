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



