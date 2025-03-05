---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Relevant asset types
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 010
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
| UI icon | Inventory Item Definition *(<span class="object">ID_MyUnit</span>)* |
| Gameplay tags / catagories | Inventory Item Definition *(<span class="object">ID_MyUnit</span>)* |
| Abilities | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| Spawnable actors | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| Animation | Equipment Definition *(<span class="object">EQD_MyUnit</span>)* |
| Skeletal Mesh | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| Character parts | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| Starting equipment | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| Starting inventory | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |
| Default attributes | Equipment Instance *(<span class="object">EQI_MyUnit</span>)* |

