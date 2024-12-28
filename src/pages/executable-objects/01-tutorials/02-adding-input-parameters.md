---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Adding Input Parameters
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**Executable Objects can have exposed variables that affect what they do. This tutorial explains how to set up these parameters, and add them to a node.**

In your Executable Object Blueprint, navigate to the My Blueprint panel, and add a new variable.

![](../../../assets/executable-objects/AddVariable-large.jpg)

Select the desired type of your variable.

![](../../../assets/executable-objects/VariableType02-large.jpg)

Select your variable, and navigate to the *Details* panel. Here, you can change the variable name, type, description, default value, and any other properties of the variable.

![](../../../assets/executable-objects/VariableDetailsPanel.jpg)

In the details panel, Enable the *Instance Editable* and *Expose on Spawn* specifiers.

![](../../../assets/executable-objects/ExposeOnSpawn03-large.jpg)

Compile and save your Bluerpint.

![](../../../assets/executable-objects/CompileSave.jpg)

You may need to refresh existing nodes that were already placed for this object.

![](../../../assets/executable-objects/RefreshNode.jpg)

Your updated node will now have your newly created variable exposed as an input parameter.

![](../../../assets/executable-objects/AddVariableResult-large.jpg)

*Congratulations! You have successfully added an input parameter to your Executable Object.*
