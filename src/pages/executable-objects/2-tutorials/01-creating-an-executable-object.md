---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Creating an Executable Object
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 1
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

One of the main strengths of Executable Objects,  is that their functionality is exposed to Blueprint. This means that designers can easily create their own asynchronous actions entirely from the editor. This article will guide you through the steps required to create your own Executable Object.

Add a new Blueprint Class to your project.

![](../../../assets/executable-objects/CreateNewBlueprintClass1-large.jpg)

Select <span class="object">ExecutableObject</span> as the parent class.

![](../../../assets/executable-objects/ParentClass-large.jpg)

Give your Executable Object a name

![](../../../assets/executable-objects/ClassName-large.jpg)

Override the On <span class="function">Execution Start</span> function. 

![](../../../assets/executable-objects/OnExecutionStartOverride-large.jpg)

Connect any logic you want to run when the execution starts.

![](../../../assets/executable-objects/OnExecutionStartImplementation-large.jpg)

Do the same for <span class="function">On Execution End</span>. This logic will run when your execution has finished.

![](../../../assets/executable-objects/OnExecutionEndImplementation-large.jpg)

In an Event Graph of your choosing, add an <span class="function">Execute Object</span> node.

![](../../../assets/executable-objects/ExecuteObjectNodeAdd-large.jpg)

Select your newly created Executable Object as the Class.

![](../../../assets/executable-objects/selectAsClass.jpg)

Some additional pins may be added automatically, based on your chosen class. To modify these pins, please follow the [tutorial on adding input execution pins](/executable-objects/2-tutorials/03-adding-input-execution-pins).

![](../../../assets/executable-objects/AdditionalPins-small.jpg)

You use the <span class="function">Start Execution</span> and <span class="function">End Execution</span> pins to access the <span class="function">On Execution Start</span> and <span class="function">On Execution End</span> events you have created above. Aftwerwards, the execution will continue on the output pins of the node. 

![](../../../assets/executable-objects/exec03-large.jpg)

Similarly, you can access the <span class="function">On Execution Update</span> event by calling the <span class="function">Process Execution Update</span> function from any Blueprint (from inside or outside the Executable Object).

![](../../../assets/executable-objects/onupdate02-large.jpg)

To get a more general idea of the execution flow when working with Executable Objects, please consult the [article on Controlling the Execution](/executable-objects/1-reference-material/03-controlling-the-execution).

**Congratulations! You have successfully created your own Executable Object.**

![](../../../assets/executable-objects/DefaultNodeResult02-large.jpg)

What do to next?

* [Add input parameter pins](/executable-objects/2-tutorials/02-adding-input-parameters)
* [Add input execution pins](/executable-objects/2-tutorials/03-adding-input-execution-pins)
* [Add output delegate pins](/executable-objects/2-tutorials/05-adding-delegate-pins)
* [Add exclusivity rules](/executable-objects/2-tutorials/06-exclusivity)