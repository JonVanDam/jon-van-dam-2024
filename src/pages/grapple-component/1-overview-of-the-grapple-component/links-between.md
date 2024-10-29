---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Links between Grapple Components and Grapple Objects
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

A Grapple Object is dependent on Grapple Components for most of its functionality. The relations between a Grapple Object and a Grapple Component can be described as follows.

## Master Grapple Component / Controlled Grapple Object

A Grapple Sequence is Controlled by a Master Grapple Component. This means that Input Functions used on this Grapple Component that affect a Grapple Sequence, will take effect on the Controlled Grapple Object. A Grapple Component becomes the Master of any Grapple Sequence that it Initiates and can only have one controlled Grapple Sequence. If a new one is Initiated, the previous one is Terminated.
