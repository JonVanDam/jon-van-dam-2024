---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Controlling the execution
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 1
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Executable Objects have an execution flow that is easy to understand and control. This article will look at the various ways in which you can interface with an Executable Object.

<embed src="/public/pdf/slide-executionflow.pdf" width="100%" height="500px" toolbar=0 frameborder="0" scrolling="no" />

## *Execute Object* node

The easiest way to use an Executable Object, is through the <span class="function">Execute Object</span> node. You can do so by adding the selected node to a Graph, and selecting the desired class.

![](../../../assets/executable-objects/NodeAdd-large.jpg)

![](../../../assets/executable-objects/NodeSelectClass-large.jpg)

The node can be customized through the Executable Object itself:

* [Executing custom Executable Object Classes](/executable-objects/01-tutorials/01-creating-an-executable-object)
* [Add exposed variables](/executable-objects/01-tutorials/02-adding-input-parameters)
* [Add custom function inputs](/executable-objects/01-tutorials/03-adding-input-execution-pins)
* [Add output delegates](/executable-objects/01-tutorials/05-adding-delegate-pins)

![](../../../assets/executable-objects/AbilityNode-large.jpg)

## Constructing an Executable Object manually

It is also possible to construct and execute the object manually using the Engine's default functionality. To do so, use a <span class="function">Construct Object From Class</span> node, select the desired class, and call <span class="function">Setup</span> and <span class="function">Start Execution</span> on the constructed object. While this setup takes a bit more time, it can be useful when working in Graphs that do not allow latent nodes (e.g. function graphs).

![](../../../assets/executable-objects/ConstructObjectExample-large.jpg)

## Input Functions

You can control the Executable Object using the functions listed in the "Input" category. 

![](../../../assets/executable-objects/InputFunctionsExample02-large.jpg)

These input functions can also be called using the execution pin with the same name on an <span class="function">Execute Object</span> node.


