---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Customizing the appearance of the execution node
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 8
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**You can change the appearance of the Execute Object node in several ways. This article provides an overview of the different ways to do so.**

![](../../../assets/executable-objects/customization-02-large.jpg)

You can find the settings related to the appearance of the node in the *class defaults* of your Executable Objects, in the *Cosmetic* category.

## Node color

You can change the color of the node using the <span class="variable">Color</span> variable, located in the *cosmetic* category of your Executable Object.

![](../../../assets/executable-objects/Cosmetic-large.jpg)

![](../../../assets/executable-objects/ExampleContentSmallLayout02-large01.jpg)

## Pin order

Enabling the <span class="variable">Use Regular Pin Order</span> setting will make the node look more like a typical <span class="function">Construct Object From Class</span> node, by keeping the execution pins on the top of the node.

![](../../../assets/executable-objects/RegularPinOrder-large.jpg)

## Node title

You can change the text on the header of the node in two ways:

* A first way, is by changing the <span class="variable">Node Title</span> variable. This will change only the first line of the title, and keep the class of the object mentioned on a second line.

* You can also override the <span class="function">Get Node Title</span> function. This gives you full control over the title. You can use *[Shift+Enter]* to add a new line to the text. Any lines below the first one, will show up with special formatting.

![](../../../assets/executable-objects/OverrideGetNodeTitle-large.jpg)

![](../../../assets/executable-objects/NodeTitle-small.jpg)