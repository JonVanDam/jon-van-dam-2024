---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Skeletal Mesh / Character Parts
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 070
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Units can each have their own appearance. In this regard, we should differentiate between two types of meshes.

## Main skeletal mesh on the pawn

The actual Skeletal Mesh Component on the pawn. This is the mesh that is actually runs the main animation instance, and is used for gameplay (e.g. character proportions and collision). In many projects (including *Fortnite* and *ShooterGame*), this mesh is actually an invisible mesh, and all cosmetics are derived aftwerwards from its pose.

When a unit is selected, you can change the main skeletal mesh of a pawn in two ways:

1.  Open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)*for your unit, and modify the <span class="variable">Skeletal Mesh Override</span> variable.

    ![](../../../assets/lyra-unit-selection/skm-override.jpg)

2. Open the character part you wish to use, and implement <span class="object">BI_CosmeticsInterface</span> on it.

    ![](../../../assets/lyra-unit-selection/cosmetics-interface.jpg)

    Afterwards, implement the interface function <span class="function">Get Desired Parent Mesh</span>. In this function, you can also return a priority. In case there are multiple character parts that want a different parent mesh, the one with the highest priority will be chosen.

    ![](../../../assets/lyra-unit-selection/desired-parent-mesh.jpg)

## Character parts 

Character parts are cosmetic actors that are added to a pawn, without affecting gameplay. 

A common approach is to have a main skeletal mesh for each character or archetype in your game, and different character parts that represent outfits, skins, or customization items.

To add character parts while your unit is selected, open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)* for your unit, and modify the <span class="variable">Character Parts</span> variable.

![](../../../assets/lyra-unit-selection/character-parts.jpg)
