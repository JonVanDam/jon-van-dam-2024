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

The Grapple Sequence can influence the world transformation of Components on Pawns, as well as their parent/child relations to other Components. This is done through repositioning.

Settings related to repositioning in a Grapple Sequence are split up between the Global Grapple Data and the Local Grapple Data.

## Scene Root

The Scene Root is a transformation that acts as the root for the Grapple Sequence. Participants will be repositioned relative to the transformation of the Scene Root, unless the Grapple Sequence is using a Scene Collision Actor.

The Scene Root is defined in the Global Reposition Data of a Grapple Sequence using a variable structure of type struct_GC_AttachmentDefinition. While this structure allows you to define an attach socket and a relative transform, these settings will only have effect if your Grapple Sequence is using a Scene Collision Actor.

By default, the Scene Root will be the root component of the Master Grapple Component's owner.

## Reposition Target

Every Grapple Sequence has a Reposition Target. This is the Scene Component that acts as a reference point for repositioning. All repositioned Scene Components will be transformed relative to this target.

The Reposition Target is automatically set by the Grapple Component. The actual Scene Component assuming the role of the Reposition Target depends on whether the Grapple Sequence is using a Scene Collision Actor.

If there is no Scene Collision Actor, the Scene Root will be the Reposition Target.
If there is a Scene Collision Actor, the scene component 'Scene Root Correction' of the Scene Collision actor will be the Reposition Target.
