---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Animation
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 060
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Selected units can affect the animations on the pawn. This can be done in the following ways.

## Overriding the main anim instance directly

The unit selection can directly set the animation instance that runs on the character mesh. To do this, open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)* for your unit, and modify the <span class="variable">Anim Instance Override</span> variable.

## Linking animation layers

It is also possible to link animation layers, without changing the animation blueprint running on the pawn.

To do this, open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)* for your unit, and modify the <span class="variable">Animation Layers</span> variable. This will link the layers from the selected animation blueprints. 

![](../../../assets/lyra-unit-selection/animation-slots-eqi.jpg)

For most projects, it is sufficient to provide "*UnitSelection*" as the key, and your desired animation blueprint as the value. These will then be treated as an animation instruction for the <span class="object">Animation Manager Component</span>, which will link the animation layers on the pawn. 

For more advanced applications or information on linking layers from multiple animation blueprints, please consult the [article on animation instructions](/lyra-unit-selection/006-reference-material/030-animation-instructions).

For more information on Animation Blueprint Linking in general, please consult the [Unreal Engine documentation on the topic](https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprint-linking-in-unreal-engine). 