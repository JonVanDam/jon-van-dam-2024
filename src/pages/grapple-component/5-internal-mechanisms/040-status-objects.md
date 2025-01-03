---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Status Objects'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 040
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

<div class="note">The information on this page relates to the internal functioning of the Grapple Component. It should only be relevant in case you are creating advanced Grapple Sequences, or if you are modifying or expanding on aspects of the Grapple Component itself. </div>

## Status Object Base Class

<embed src="/src/assets/grapple-component/slide-custom-objects.pdf" width="100%" height="550px" toolbar=0 frameborder="0" scrolling="no" />

### Concept

Objects of Class <span class="object">StatusObject</span> can be added to and removed from an Affected Object. They can apply effects to this Affected Object. They are managed by a Managing Object.

### Affected Object(s)

An Affected Object is an Object the Status Object is added to or Removed from. Every Affected Object contains a list of Status Objects applied to is. Every Object can be an Affected Object, provided that it implements Interface <span class="object">BI_StatusObjectInterface</span>. 

* To add or remove a Status Object, use Interface Call <span class="function">Add / Remove Status Object</span> on the Affected Object.

* To access all Status Objects added to an Affected Object, use Interface Call <span class="function">Get added Status Objects</span>.

### Managing Object

Every Status Object stores one reference to a Managing Object. This is Object does not necessarily need to be an Affected Object of the Status Object. By default, the Managing Object is the Outer Object of the Status Object. This can be Changed by overriding function <span class="function">Get Managing Object</span> on the Status Object. Every Object can be a Managing Object, provided that it implements Interface <span class="object">BI_StatusObjectInterface</span>. 

Status Objects can use Interface Call <span class="function">Enable / Disable Tick Updates for Status Object</span> on the Managing Object. The Managing Object should then call Function On Tick on that Status Object every tick.

All of the functions from Interface <span class="object">BI_StatusObjectInterface</span> should be implemented on the Managing Object. The [Grapple Component](/grapple-component/1-overview-of-the-grapple-component/basic-concepts) is meant to be the Managing Object for all Status Objects that come with the project, and implements all of these functions by default. 

### Implementable functions

The Status Object contains the following functions that can be overridden depending on the desired functionality.

| Function | Description |
| ----------- | ----------- |
| <span class="function"> On Added</span> | Called when the Status Object is added to any Affected Object.  |
| <span class="function"> On Removed	</span> | Called when the Status Object is removed from any Affected Object. |
| <span class="function"> On Tick	</span> | Can be called by the Managing Object every Tick. To enable or disable, use function Enable / Disable Tick Updates on the Status Object. |
| <span class="function"> Get Managing Object	</span> | This function is used whenever the Object needs to access its Managing Object. By default, it returns the Outer Object of the Status Object. |

<div class="note">More information on how these functions are implemented in each child class, is available in the Graphs of these Blueprints.</div>

![](../../../assets/grapple-component/grapple-object-graph.jpg)
