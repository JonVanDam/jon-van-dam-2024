---
layout: ../../../layouts/MarkdownPostLayout.astro
title: UI Icon
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 120
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Units in the inventoy of a player can implement a UI icon to represent them in widgets. 

![](../../../assets/lyra-unit-selection/ui-icon.jpg)

To add an icon, open the Inventory Item Definition for your unit *(<span class="object">ID_MyUnit</span>)*, and navigate to the <span class="variable">Fragments</span> variable. In this array, add an  add an inventory fragment of type <span class="object">UInventoryFragment_QuickBarIcon</span>. In this fragment, you can specify the icon to be used, as well as a display name for your unit.

![](../../../assets/lyra-unit-selection/icon.jpg)
