---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Default attributes
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 090
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

It is possible to set a defferent set of default gameplay attributes for each selectable unit. This is done in the equipment instance of your unit (e.g. (<span class="object">EQD_MyUnit</span>)). 

![](../../../assets/lyra-unit-selection/default-attributes.jpg)

To initialize an attribute set, add it as a key in the (<span class="variable">Default Attributes</span>) map. Then, select the desired data table to use for initialization. 

This data table should have a row type of <span class="object">UAttributeMetaData</span>. It is possible to use one data table to initialize attributes on multiple attribute sets. 

The data table <span class="object">ATTR_Default</span> contains an example of how to use this system to set the maximum health of a unit.

![](../../../assets/lyra-unit-selection/data-table.jpg)

For more information on initializing attribute sets using data tables, please consult the [Unreal Engine documentation on the topic](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-attributes-and-attribute-sets-for-the-gameplay-ability-system-in-unreal-engine#importingdatatables). 