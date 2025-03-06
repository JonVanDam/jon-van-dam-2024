---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Setting a default selection
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 050
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

To set a default selection (starting character) for your project, follow these steps:

* Open your subclass of the <span class="object">GA_UnitSelection</span> ability

* Change the <span class="variable">Default Selection</span> variable to the equipment definition of the unit you want to start with.

![](../../../assets/lyra-unit-selection/initial-selection.jpg)

Whenever a player has this ability, it will start the game with this character selected. 

![](../../../assets/lyra-unit-selection/initial-selection-mannequin.jpg)