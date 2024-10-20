---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Basic Concepts'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 1
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Grapple Component

The Grapple Component is an Actor Component which can be added to any Pawn. The Grapple Component's main functionality relates to Grapple Sequences. It allows other Blueprints to control the Grapple Sequence, and acts as a proxy that represents its owning Actor in the Grapple Sequence.

## Grapple Sequence

A Grapple Sequence is an event where different characters interact with one another in the game world, for example by playing a synchronized sequence of animations together.

On a technical level, the Grapple Sequence is a state one or more Grapple Components can enter, where they each become Participant and assume a specific role.

The Grapple Sequence can apply different effects to each of its Participants. Most notably, Participants will play animations that are synchronized with one another. More generally, effects can be purely related to player feedback (e.g. synchronized animation updates; changes to the camera and viewpoint), but they can also affect gameplay (e.g. repositioning; ability to move; damage). Each Grapple Sequence is defined by a Grapple Object. The content included with the Grapple Component exists as a toolset for creating these Grapple Sequences.

## Getting Started

Most users will be able to get started with the Grapple Component doing the following:

Consulting this first chapter of Documentation (Grapple Component).
Following the tutorial on Installation, which can be found at the end of this document.
Following the tutorial on Implementation, which can be found at the end of this document.
Following the tutorial on Grapple Sequence, which can be found at the end of this document.
Consulting the Event Graph of the Grapple Sequence for more information and for links to commonly used Blueprint nodes.
In addition to following the tutorials in this Documentation, you can opt to watch the introductory video tutorial.

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |
