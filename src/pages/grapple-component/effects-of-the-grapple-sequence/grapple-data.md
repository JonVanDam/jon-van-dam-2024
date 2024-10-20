---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Grapple Data'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 1
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

In the case if Grapple Objects inheriting from GrappleObject_StructBased, the effects of the Grapple Sequence are determined by its Grapple Data. This Grapple Data is split up into Global Grapple Data and Local Grapple Data.

## Global Grapple Data

The Global Grapple Data contains the settings that will be applied during a Grapple Sequence and are common to all Participants. As such, they apply to the Grapple Sequence as a whole.

## Local Grapple Data

Local Grapple Data contains the settings that will be applied during a Grapple Sequence and that are specific to a single Participant. Local Grapple Data is defined using a variable structure of type Struct_GC_GrappleData_Local, which consists of the following member variables.
