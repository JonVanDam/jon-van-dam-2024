---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Spawnable actors
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 150
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Units can spawn actors while they are selected. To do so, open the Equipment Definition for your unit *(<span class="object">EQD_MyUnit</span>)*, and modify the <span class="variable">Animation Layers</span> variable.

<div class="note">This functionality is not unique to the plugin, but part of the equipment system in Lyra. It is designed mostly for weapons that are equipped and need to spawn replicated actors. When using the Lyra Unit Selection plugin as a character selection system, it is suggested to use the <a href="/lyra-unit-selection/002-customization/070-skeletal-mesh-character-parts">settings related to skeletal meshes and character parts</a> instead.</div> 

![](../../../assets/lyra-unit-selection/spawn-actor.jpg)

