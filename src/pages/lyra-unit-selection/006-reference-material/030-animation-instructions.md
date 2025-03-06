---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Animation Instructions
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 030
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

<div class="note">The information on this page requires prior knowledge of Animation Blueprint Linking. More information on this topic can be found in the <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprint-linking-in-unreal-engine">Unreal Engine Documentation</a>.</div> 

## The Animation Manager

The Lyra Unit Selection plugin includes an <span class="object">Animation Manager Component</span> that can be added to each pawn, and process animation instructions. These instructions can be used to link animation layers on the skeletal mesh of the pawn. For example, to change the way a specific unit moves.

The Animation Manager Component has different <span class="variable">Slots</span>. These are different named keys in a map, that each correspond to an <span class="object"> Anim Instance</span> class. These slots represent different states the pawn is in, that can each have an effect on its animation style.  

Every time the animation is updated, the layers from the  animation blueprints in all of these slots are linked in order, with the last entry in the map being linked last (thus giving that slot the highest priority).

Below is an example of what these slots may look like during gameplay.

![](../../../assets/lyra-unit-selection/slots-application.jpg)

It is possible to add, remove, or change the order of these slots by creating a subclass of the <span class="object">Animation Manager Component</span>, navigating to its *class defaults*, and changing the contents of the <span class="variable">Slots</span> variable.

![](../../../assets/lyra-unit-selection/custom-slots .jpg)

In most cases, all layers on the Animation Manager Component are empty by default. To add animation layers in them, use one of the methods bolow.

## Defining animation instructions for a selectable unit

It is possible to link animation layers while a unit is selected.

To do this, open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)* for your unit, and modify the <span class="variable">Animation Layers</span> variable. This will link the layers from the selected animation blueprints, in the selected slots. 

![](../../../assets/lyra-unit-selection/animation-slots-eqi.jpg)

## Sending animation instructions manually

It is also possible to link and unlink layers using the (<span class="function">Send Animation Instruction</span>) macro. To remove an anim instance from a slot, simply provide the name of the slot and leave the anim instance class set to "*none*".

![](../../../assets/lyra-unit-selection/send-animation-instruction.jpg)
