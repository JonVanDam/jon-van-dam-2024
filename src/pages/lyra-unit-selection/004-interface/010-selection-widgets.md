---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Selection Widgets
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 010
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

![](../../../assets/lyra-unit-selection/splash-ui.jpg)

In your unit selection ability (e.g.  <span class="object">GA_UnitSelection_LyraUnitSelectionSample</span>), you can specify a widget the player can use to select their unit. 

## Using the widget presets

The plugin contains two presets for these widgets:

* <span class="object">UI_UnitSelection_Center</span> - Simple witget with a small unit selection grid.

![](../../../assets/lyra-unit-selection/pie-center.jpg)

* <span class="object">UI_UnitSelection_Side</span> - Widget with a unit selection grid on the side, which will activate a [preview scene](/lyra-unit-selection/004-interface/020-preview-scene) when opened.

![](../../../assets/lyra-unit-selection/pie-side.jpg)

## Creating your own widgets

You can add your own widgets by creating a child class of <span class="object">LyraActivatableWidget</span>. 

To use this widget for unit selection, add widget of class <span class="object">W_UnitSelectionGrid</span> to its hierarchy.

In the details of this unit selection grid, you can change the <span class="variable">Item Filter Query</span> variable to determine which inventory items are shown. 

In the details of this unit selection grid, set the <span class="variable">Activate Preview Scene</span> variable to *true* if you want to make use of a [preview scene](/lyra-unit-selection/004-interface/020-preview-scene). 

![](../../../assets/lyra-unit-selection/filter.jpg)

## Names and icons for each unit

Each selectable unit can have its own display name and menu icon. These are defined in the equipment definition. Please refer to [this page](/lyra-unit-selection/004-interface/120-ui-icon-display-name) for more information.

