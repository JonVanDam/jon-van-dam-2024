---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Tags / Categories

createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 130
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

You can assign [gameplay tags](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-tags?application_version=4.27) to your selectable unit. These tags can be used to filter units, and to add classifications to them.

To add gameplay tags, open the Inventory Item Definition for your unit *(<span class="object">ID_MyUnit</span>)*, and navigate to the <span class="variable">Fragments</span> variable. In this array, add an  add an inventory fragment of type <span class="object">UInventoryFragment_Tags</span>. In this fragment, you can specify the desired gameplay tags.

![](../../../assets/lyra-unit-selection/tags.jpg)

These categories can be used depending on the needs of your project. To access them, get a reference to the inventory item you want to test, and access the fragment of type <span class="object">UInventoryFragment_Tags</span>.

![](../../../assets/lyra-unit-selection/access-tagfs.jpg)

One example of how the plugin uses them by default, is in the user interface used by the character selection abilities. This is done to prevent the character select menu from displaying other items in the player's inventory, such as weapons.

The filters for these widgets are defined in their Unit Selection Grid, and more precisely in the <span class="variable">Item Filter Query</span> variable. 

![](../../../assets/lyra-unit-selection/filter.jpg)
