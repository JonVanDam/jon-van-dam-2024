---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Preview Scene
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 020
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Some projects may want to use a 'character select screen' to show the player what their selected unit looks like. This can be done using the following steps:

## Placing a template in the level

First off, we need to place an actor of class <span class="object">B_UnitSelectionPreviewScene</span> in our level. 

![](../../../assets/lyra-unit-selection/usps-level.jpg)

At runtime, this actor will be ued as a template and replaced with the actual preview scene that is unique to each player controller. It is also possible to create multiple scenes, in which case a random actor location will be chosen.

## Spawn a unit selection scene

Next, we need to make sure that each controller has its own instance of the unit selection scene to work with. This can be done in any of the following ways:

* In your unit selection ability (e.g.  <span class="object">GA_UnitSelection_LyraUnitSelectionSample</span>), set variable <span class="variable">Spawn Preview Scene</span> to *true*. 

* Alternatively, you can open B_UnitSelectionComponent (or the subclass used in your project), and set <span class="variable">Spawn Preview Scene On Begin Play</span> to *true*.

* Alternatively, you can call function <span class="function">Spawn Preview Scene</span> manually on the Unit Selection Component of the controllers you wish to spawn them for.

## Activating the preview

At runtime, we  can control the activation of this preview scene, and tell it which units to display. This can be done in the following ways:

* In most cases, the user interface will control the preview screen. To enable this behaviour for a widget, open your unit selection ability (e.g.  <span class="object">GA_UnitSelection_LyraUnitSelectionSample</span>), set the <span class="variable">Widget To Spawn</span> to a widget class that makes use of the preview screen (e.g.  <span class="object"> W_UnitSelection_Side</span>). If you are using a custom widget class, select its unit selection grid. In the details panel, set the <span class="variable">Activate Preview Scene</span> variable to *true*.

* Alternatively, you can use the functions <span class="function">Start Preview</span>, <span class="function">Update Preview</span>, and <span class="function">End Preview</span> on the Unit Selection Component. 

![](../../../assets/lyra-unit-selection/contol-preview-screen-01.jpg)

## Customizing the appearance of the preview scene

You can customize the appearance of the preview scene by creating a child class of <span class="object">B_UnitSelectionPreviewScene</span>, and placing this actor in your level instead.

![](../../../assets/lyra-unit-selection/w-side.jpg)
