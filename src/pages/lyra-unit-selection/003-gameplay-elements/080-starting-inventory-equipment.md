---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Starting inventory / equipment
createdAt: '2025-03-05'
updatedAt: '2025-03-05'
sortOrder: 080
seoTitle: ''
seoKeywords: [Unreal Engine 5 Character Select Screen Lyra Unit Selection]
seoDescription: ''
---

Units can have their own starting equipment and inventory. To add these, open the Equipment Instance *(<span class="object">EQI_MyUnit</span>)*for your unit, and modify the following variables:

* <span class="variable">Additional Equipment</span> - This will equip items when the unit is selected, and unequip them when another unit is selected. Note that this variable has no effect on the controller's inventory.

* <span class="variable">Granted Inventory</span> - This will add items to the inventory when the unit is selected, and remove them when another unit is selected. Note that this has no direct effect on the item that the pawn has equipped. Items in the inventory must be equipped on the pawn manually. However, 

![](../../../assets/lyra-unit-selection/additional-equipment.jpg)

* Many Lyra projects (including *ShooterGame*) have a <span class="object">Lyra Quick Bar Component</span> on each player controller. This component allows players to quickly cycle between weapons in their inventory. If <span class="variable">Add Grantred Inventory To Quick Bar</span> is set to true, the equipment instance will add all granted items to the quick bar as well, and attemt to equip them. 

![](../../../assets/lyra-unit-selection/quickbar.jpg)

