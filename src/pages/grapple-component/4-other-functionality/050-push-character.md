---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Push Character'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 4
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

The Grapple Component can push characters around in the game world by launching them, applying an impulse or directly affecting their movement input. This can be done in the following ways.

![](../../../assets/grapple-component/push-header.jpg)

## How to push a Character?

### Using Macro nodes

Alternatively, it is possible to initiate a Character Push using Macro node <span class="function">Push Character (Using Grapple Component)</span>.  To instantly launch a character, use Macro node  <span class="function">Launch Character (Using Grapple Component)</span>.

The input parameters on these nodes correspond to the names of variables on Object Classes CharacterPushObject and CharacterPushObject_DirectionBased. For more information, please consult the Blueprint Graphs of these Objects.

![](../../../assets/grapple-component/push-macros.jpg)

### Construct and add Character Push Object manually

A Character Push can be initiated by constructing an object of type <span class="object">CharacterPushObect_DirectionBased</span> and adding it to the Grapple Component of the Pushed Character using function <span class="function">Add / Remove Status Object</span>. 

<div class="note">For more information on Status Objects and how to manage them, please consult the section on [Status Objects](/grapple-component/5-internal-mechanisms/040-status-objects).</div>

![](../../../assets/grapple-component/construct-cpo.jpg)

## Application method

The way a Character is Pushed can be set using an enumeration of type  <span class="object">enum_GC_CharacterPushApplicationMethod</span>.

| Application method | Description |
| ----------- | ----------- |
| Add Movement Input (Character) | <span class="function">Add Movement Input</span> to the Pushed Actor. This is optimal for multiplayer, but only works on Character Blueprints. |
| Add Impulse (Character Movement Component)	 | Use the <span class="function">Add Impulse</span> function on the Character Movement Component of the Pushed Actor. |
| Launch Character		 | Use the Use the <span class="function">Launch Character</span> function on the Pushed Actor. Only works on Character Blueprints. |
| Do nothing		 | Do not perform any action. |

