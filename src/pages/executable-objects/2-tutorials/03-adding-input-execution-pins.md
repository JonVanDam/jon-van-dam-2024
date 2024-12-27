---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Adding input execution pins
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 3
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Executable Objects can define custom input pins on their node, that call functions on the Executable Obejct. Here is how to set them up.

In the *My Blueprint* tab of your Executable Object, navigate to the *Functions* section. Create a new function, and give it a name.

![](../../../assets/executable-objects/NewFunction-large.jpg)

Still in your Executable Object, open the *Class Defaults*. The details panel on the right will now show all variables.

![](../../../assets/executable-objects/DetailsClassDefaults-large.jpg)

Expand the* Executable Object* and *Execution* categories, and you will find a variable named Input Pins. This list defines the input execution pins that are visible on the left side of the node.

![](../../../assets/executable-objects/InputPinsVariable-large.jpg)

Use the *"+"* icon on the top right of the list to add a new element to the array. Give this element the same name as your function. The name in the array must match exactly with the name of the function you want to call. If not, the pin will not work!

![](../../../assets/executable-objects/AddElement-large.jpg)

You can also add names of other functions or events that already exist in parent classes of the Executable Object. For example, input functions like <span class="function">StartExecution</span>, <span class="function">ProcessExecutionUpdate</span>, or <span class="function">EndExecution</span>. Note that while these function names are displayed with spaces in Bluerpint nodes, the name specified in the Executable Object iteself must match the internal c++ name, which does not contain these spaces. 

![](../../../assets/executable-objects/inputfunctionstopin-large.jpg)

You can change the order of the input pins by dragging the array elements using the handles on the left.

![](../../../assets/executable-objects/Reorder-large.jpg)

![](../../../assets/executable-objects/reorder02-large.jpg)

![](../../../assets/executable-objects/reorder03-large.jpg)

Refresh any existing nodes if the changes have not taken effect.

![](../../../assets/executable-objects/RefreshNode.jpg)

The newly created pin is now available on your node.

![](../../../assets/executable-objects/myfunctionavailabke-large.jpg)

*Congratulations! You have successfully added an input execution pin to your node.*