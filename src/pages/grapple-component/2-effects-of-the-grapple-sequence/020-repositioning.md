---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Repositioning'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

The [Grapple equence](/grapple-component/1-overview-of-the-grapple-component/010-basic-concepts) can influence the world transformation of Components on Pawns, as well as their parent/child relations to other Components. This is done through repositioning. Settings related to repositioning are split up between the [Global Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data) and the [Local Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data).

## Scene Root

The Scene Root is a transformation that acts as the root for the Grapple Sequence. Participants will be repositioned relative to the transformation of the Scene Root, unless the Grapple Sequence is using a Scene Collision Actor.

The Scene Root is defined in the Global Reposition Data of a Grapple Sequence using a variable structure of type <span class="object">struct_GC_AttachmentDefinition</span>. 

![](../../../assets/grapple-component/scene-root.jpg)

While this structure allows you to define an attach socket and a relative transform, these settings will only have effect if your Grapple Sequence is using a Scene Collision Actor.

By default, the Scene Root will be the root component of the [Master Grapple Component](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data)'s owner.

## Reposition Target

Every Grapple Sequence has a Reposition Target. This is the Scene Component that acts as a reference point for repositioning. All repositioned Scene Components will be transformed relative to this target.

![](../../../assets/grapple-component/get-reposition-target.jpg)

The Reposition Target is automatically set by the Grapple Component. The actual Scene Component assuming the role of the Reposition Target depends on whether the Grapple Sequence is using a Scene Collision Actor.

* If there is no Scene Collision Actor, the Scene Root will be the Reposition Target.
* If there is a Scene Collision Actor, the scene component 'Scene Root Correction' of the Scene Collision actor will be the Reposition Target.

## Scene Collision actor

### Purpose

Optionally, you can specify a <span class="object">SceneCollisionActor</span> class in the [Global Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data).

This will spawn a Scene Collision Actor at the beginning of the Grapple Sequence. This is an actor that takes up the space where the Grapple Sequence will happen. When the Scene Collision Actor is spawned, it will automatically find a suitable transform for the Grapple Sequence in the world. This prevents characters from colliding with the world.

The Scene Collision Actor is spawned at the location of the Scene Root, and takes its place as the Reposition Target. Depending on the Global Reposition Data, the spawn rotation of the Scene Collision Actor will be modified so that it is aligned towards (i.e. looks at) a target Scene Component.

Note that the Scene Collision will take the place of the Scene Root provided above, meaning that all Participants will be repositioned based on the root of the Scene Collision Actor instead.

![](../../../assets/grapple-component/scene-collision-actor-preview.jpg)

### Scene Root Correction

The <span class="function">Attempt Transform Correction</span> event executes the Scene Collision Actor's main functionality, which is looking for a world transform that acts as the root of a Grapple Sequence and that leaves enough space for all relevant animations to play out, without having characters collide with the world.

To this end, the Scene Collision Actor contains one or more Primitive Components. These Primitive Components represent the Participants in the current Grapple Sequence, as well as the space they need to be able to move within.

The Scene Collision actor will test if any of these Primitive Components are colliding with the world, and if so, will try applying some 'corrections' to the original transform, in order to make the Grapple Sequence fit into the game world physically.

### How to use

To make use of a Scene Collision Actor, select a Scene Collision Actor Class when defining the Global Reposition Data of your Grapple Sequence.

![](../../../assets/grapple-component/scene-collision-node.jpg)

### Automatic Scene Collision Actor

For most situations, using <span class="object">SC_Automatic</span> is recommended.

This Scene Collision Actor that automatically sets up collision based on the estimated proportions of the Grapple Sequence. It ensures that the Grapple Sequence is placed in such a way that none of the participating Characters collide with the game world.

### Creating your own Scene Collision Actor

To create your own Scene Collision Actor, follow these steps:

* Create a child Blueprint Class of <span class="object">SceneCollisionActor</span>.
* Add the necessary Primitive Components to represent the physical dimensions of your Grapple Sequence. These primitive Components should be parented to the Scene Root Correction Scene Component.

![](../../../assets/grapple-component/sc-hierarchy.jpg)

### Disabling the Scene Collision Actor

To disable the Scene Collision Actor for a Grapple Sequence, set the Scene Collision Actor Class to (None) in your Global Reposition Data.

## Defining reposition settings using Grapple Data

### Global Reposition Data

The Global Reposition Data defines the transformation **of the Grapple Sequence** in the game world. 

![](../../../assets/grapple-component/global-reposition-data.jpg)

These settings are defined as part of the Global Grapple Data, using a variable structure of type <span class="object">Struct_CG_RepositionData_Global</span>, which consists of the following member variables:

| Member variable  | Description |
| ----------- | ----------- |
| <span class="variable">Scene Collision Actor Class</span> | The Class of the Scene Collision Actor, which will manage the repositioning of the Grapple Sequence as a whole. This can be left blank if you do not wish to use a Scene Collision Actor. The Scene Collision Actor is spawned at the location of the Scene Root, and takes its place as the Reposition Target. By default, class SC_Automatic is selected. This Scene Collision Actor Class will automatically ensure that the Grapple Sequence is placed in such a way that none of the participating Characters collide with the game world. To disable the Scene Collision Actor, change the selected Class to (None). The other settings in this variable structure only work if a Scene Collision Actor is spawned. |
| <span class="variable">Spawn on Floor	</span> | Whether to spawn the Scene Collision Actor on the floor instead of the actual position of the Scene Root. |
| <span class="variable">Use Look Target</span> | Optionally, you can define a target Scene Component the scene Component should be aligned towards. If a relative transform is provided, its rotation will be applied after the look at function.This member variable determines whether the Scene Collision Actor should be facing a Look Target when it is spawned. If this is not the case, it will simply assume the world rotation of the Scene Root. |
| <span class="variable">Look Target</span> | This member variable determines the target the Scene Collision Actor should look at when it is spawned. |
| <span class="variable">Reposition Scene Collision Actor based on Server Transform</span> | Whether to adjust the transformation of the Scene Collision Actor on all Clients, after it has found its transformation in the server. Enabling this setting ensures that the Grapple Sequence has the same transformation on all connections. |
| <span class="variable">Reposition Time</span> | The blend time when adjusting the transformation of the Scene Collision Actor based on the server. |

### Local Reposition Data

Local reposition data defines the relations to the Reposition Target for each Participant. 

![](../../../assets/grapple-component/local-reposition-data-nodes.jpg)

The Grapple Component will set up all other Participants relative to the Scene Root. This is done by extracting the relevant Reposition Data for each Participant. This data is found within the Local Grapple Data for that Participant.

Reposition Settings for a Single Participant are defined using a variable structure of type <span class="object">Struct_CG_RepositionData_Local</span>, which consists of the following member variables:

| Member variable | Description |
| ----------- | ----------- |
| <span class="variable">Repositioning Enabled</span> | Whether to adjust the transformation of the owning Actor of this Participant when applying the Grapple Settings. |
| <span class="variable">Target Transform</span> | The transformation relative to the Scene Root the Actor should assume. |
| <span class="variable">Compensate Character Height</span> | Whether to compensate the height of characters, and calculate the target transformations from floor height instead. |
| <span class="variable">Affect Location</span> | Whether the transformation should affect the location of the Participant. |
| <span class="variable">Affect Rotation</span> | Whether the transformation should affect the rotation of the Participant. |
| <span class="variable">Blend Time</span> | The time during which the Actor is repositioned gradually to its target position. |
| <span class="variable">Blend Curve</span> | The curve used when gradually blending between transformations.|
| <span class="variable">Attach when repositioning is complete	</span> | Whether to attach the Actor to the Scene Root when the process of repositioning has completed. |
| <span class="variable">Update Target Transform Continuously	</span> | Whether to update the target transformation continually when repositioning is active. If this is disabled, the transform is calculated once at the start. |
| <span class="variable">Update Start Transform Continuously	</span> | Whether to update the start transformation continually when repositioning is active. If this is disabled, the transform is calculated once at the start. |
| <span class="variable">Attach Scene Component	</span> | Whether to attach the Actor to the Scene Root when the process of repositioning has completed. |
| <span class="variable">Maintain transform Every Tick	</span> | Whether to keep applying the relative transformation every tick, until the Reposition Object is removed. This can be used as an alternative to attaching the Scene Component. | 

## Repositioning Scene Components manually

Scene Components can be repositioned manually using the following functions on the Grapple Component:

* <span class="function">Reposition Participant</span>
* <span class="function">Reposition Scene Component - Target Transform</span>
* <span class="function">Reposition Scene Component - Look At</span>

## Reposition Objects

On a technical level, repositioning is handled on the Grapple Component using <span class="object">Reposition Objects</span>, which are added to the Grapple Component as [Status Objects](/grapple-component/5-internal-mechanisms/040-status-objects). 

