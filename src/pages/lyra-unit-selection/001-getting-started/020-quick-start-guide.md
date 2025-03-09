---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Quick Start Guide
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 020
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

## Activating the sample content

**The easiest way to get started with the plugin, is to enable the content examples, and modify these files to the needs of your project.**

To do this, enable the *Lyra Unit Selection Sample* plugin.

![](../../../assets/lyra-unit-selection/content-examples.jpg)

The content folder of the plugin contains a <span class="object">Game Feature Data</span> asset with the same name as the plugin.

![](../../../assets/lyra-unit-selection/game-feature-data.jpg)

Enable this game feature by setting its <span class="variable">Current State</span> to *Active*.

![](../../../assets/lyra-unit-selection/gfd-active.jpg)

Open the Unit Selection Sample Level.

![](../../../assets/lyra-unit-selection/example-map.jpg)

Start a new play-in-editor session, and press the [H] key. This will open the unit selection menu, allowing you to pick from a set of example characters. 

![](../../../assets/lyra-unit-selection/unit-selection-ingame.jpg)

## Adding your own selectable unit

An easy way to create your own selectable character, is to start from a copy of the sample content. To do this, select one of the character folders, and drag it to an empty space in the content browser. 

![](../../../assets/lyra-unit-selection/copy-manny.jpg)

After releasing the mouse button, select the *advanced copy here* option.

![](../../../assets/lyra-unit-selection/advanced-copy-button.jpg)

This operation will copy all necessary assets and their dependencies, allowing you to provide a new character name as a base.

![](../../../assets/lyra-unit-selection/copy-manny-rename.jpg)

Lastly, we need to add this unit as a selectable entry to our character select ability. This can be done by opening  <span class="object">GA_UnitSelection_LyraUnitSelectionSample</span>, navigating to its *class details*, and adding our newly created item definition <span class="object">ID_MyUnit</span> to the list of <span class="variable">Selectable Units</span>.

![](../../../assets/lyra-unit-selection/add-my-unit.jpg)

Start a new play-in-editor session, and press the [H] key. You will now see your newly created unit in the list of selectable entries.

![](../../../assets/lyra-unit-selection/my-unit-ingame.jpg)

<div class="note">Consult <a href="/lyra-unit-selection/02-reference-material/010-relevant-asset-types">this page</a> for more information on the classes we have just created, and how they fit into Lyra's modular game framework.</div> 

**Congratulations! You have now created your own selectable unit.**

## Customizing your selectable unit

From here, you can change the properties of your selectable unit you wish to customize:

| What? | Where? |
| ----------- | ----------- |
| [Add an animation set for your character](/lyra-unit-selection/002-cosmetic-elements/060-animation) | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| [Assign a skeletal mesh and character parts](/lyra-unit-selection/002-cosmetic-elements/070-skeletal-mesh-character-parts) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| [Add starting inventory and equipment](/lyra-unit-selection/003-gameplay-elements/080-starting-inventory-equipment) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| [Add abilities](/lyra-unit-selection/003-gameplay-elements/115-abilities) | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
|[Set default attributes](/lyra-unit-selection/003-gameplay-elements/090-default-attributes) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |

For more customization possibilities, please refer to the [article on the different asset types and customization options](/lyra-unit-selection/001-getting-started/030-different-assets-and-customization-options) of the plugin.