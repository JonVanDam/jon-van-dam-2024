---
layout: ../../../layouts/MarkdownPostLayout.astro
title: UI Icon & Display Name
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 120
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Units in the inventoy of a player can implement a UI icon to represent them in widgets. 

![](../../../assets/lyra-unit-selection/added-tiles-arrows.jpg)

To add an icon, open the Equipment Definition for your unit *(<span class="object">EQD_MyUnit</span>)*. In here, you can select a display name for your unit, as well as an icon to use in the user interface.

![](../../../assets/lyra-unit-selection/ui-customize.jpg) 

The icon can be an image or a material instance. The sample content has a material named (<span class="object">MI_UnitSelectionTileArt</span>), which is based on Lyra's content and art style. 

![](../../../assets/lyra-unit-selection/tile-art.jpg) 

You can optionally create icon with this material as the parent.

![](../../../assets/lyra-unit-selection/material-instance.jpg) 

In this newly created material instance, you can swap out the image used as the tile art with your own content.

![](../../../assets/lyra-unit-selection/change-image.jpg) 
