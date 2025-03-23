---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Character lifecycle and respawning
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 200
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

It is possible that selecting a unit affects the lifecycle of the character. 

* In most projects, we want to wait until the player respawns before applying their selection, rather than applying it instantly. This behaviour can de adjusted in the Unit Selection Component class used in your project (e.g. <span class="object">B_UnitSelectionComponent</span>).

![](../../../assets/lyra-unit-selection/usc-lifecycle.jpg)

* You may want to activate a death ability on the character after it makes a selection, so that it can respawn. The ability <span class="object">GA_UnitSelection</span> has a few settings in the *Lifecycle* category that allow you to customize this behaviour to the needs of your project.

![](../../../assets/lyra-unit-selection/lifecycle-settings.jpg)

