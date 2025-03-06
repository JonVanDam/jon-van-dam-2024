---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Different asset types and customization options
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 030
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**Selectable units typically consist of 3 files, that each represent the character in a different way:**

<embed src="/pdf/lus-execution-flow.pdf" width="100%" height="420px" toolbar=0 frameborder="0" scrolling="no" />

1. **Item Definition** (<span class="object">ID_MyUnit</span>). This asset represents your unit in the inventory of the player, making use of [Lyra's inventory system](https://dev.epicgames.com/documentation/en-us/unreal-engine/lyra-inventory-and-equipment-in-unreal-engine). The item definition contains a reference to the equipment definition for the unit, as well as metadata that are not inherent to the character itself (e.g. UI icons or gameplay tags used for filtering).

2. **Equipment Definition** (<span class="object">EQD_MyUnit</span>). This asset is a template of the character and its inherent properties, including a reference to the equipment instance type. When the player selects the unit, this equipment definition is equipped to the pawn using [Lyra's equipment system](https://dev.epicgames.com/documentation/en-us/unreal-engine/lyra-inventory-and-equipment-in-unreal-engine). 

3. **Equipment Instance** (<span class="object">EQI_MyUnit</span>). Selecting the character spawns a new equipment instance. This asset represents an individual character that has been selected and is presently applied to a pawn. Equipment instances used for unit selection inherit from a subclass named <span class="object">EQI_UnitSelection</span>, which contains additional functionality.

**These assets can be used to customize the character in the different ways:**

| What? | Where? |
| ----------- | ----------- |
| [UI icon](/lyra-unit-selection/004-interface/120-ui-icons) | Inventory Item Definition *(<span class="object">ID_MyUnit</span>)* |
| [Tags / catagories](/lyra-unit-selection/004-interface/130-tags-categories) | Inventory Item Definition *(<span class="object">ID_MyUnit</span>)* |
| [Abilities](/lyra-unit-selection/003-gameplay-elements/115-abilities) | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| [Spawnable Actors](/lyra-unit-selection/003-gameplay-elements/150-spawnable-actors) | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| [Animation](/lyra-unit-selection/002-cosmetic-elements/060-animation) | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| [Skeletal Mesh / Chcaracter parts](/lyra-unit-selection/002-cosmetic-elements/070-skeletal-mesh-character-parts) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| [Starting  inventory / equipment](/lyra-unit-selection/003-gameplay-elements/080-starting-inventory-equipment) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
|[Default attributes](/lyra-unit-selection/003-gameplay-elements/090-default-attributes) | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |

