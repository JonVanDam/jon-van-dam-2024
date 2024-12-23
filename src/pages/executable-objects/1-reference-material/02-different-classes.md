---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Base classes
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Executable Objects come in different classes, depending on the functionality you need. On a technical level, all of these classes are Blueprintable Async Actions with additional functionalities and a custom node.

The <span class="object">ExecutableObject</span>  base class is parent to the <span class="object">ExecutableObjectWithDuration</span>   class, which is in turn the parent of <span class="object">ProgressObject</span>. Each of these classes gradually adds more functionality that users can include or leave out where needed. This article contains an explanation on each of these classes, and general advice on when to use each one.

![](../../../assets/executable-objects/BaseClassesAdvanced-large.jpg)

## Executable Object

The <span class="object">ExecutableObject</span> base class is a Cancellable Async Action that can be customized in Blueprint. It must be manually started and ended using the Blueprint Node or any of its Input Functions.

![](../../../assets/executable-objects/executableobject8-small.jpg)

## Executable Object With Duration

The <span class="object">ExecutableObjectWithDuration</span> is similar to the base class, but ends automatically after a specified duration.

![](../../../assets/executable-objects/DurationObject8-large.jpg)

To stop the Object from ending automatically, set the <span class="variable">Duration</span> to a negative value.

## Progress Object

<span class="object">Progess Objects</span> also have a duration, but offer additional functionality:

![](../../../assets/executable-objects/ProgressObject8-small.jpg)

* **They have a <span class="variable">Progress</span> value that automatically updates each tick.** You can access the progress and bind functionality to it using the <span class="function">Get Progess</span> function, the <span class="function">On Progress Applied</span> event, or via the <span class="function">On Apply Progress</span> pin of the node. You can further tweak how progress scales with the elapsed time, by setting a <span class="variable">Progress Curve</span>. 

![](../../../assets/executable-objects/ProgressState-large.jpg)

* **Progress Objects can go forwards and backwards in time. They can also be paused.** This state is called the Progress State. You can access it using the <span class="function">Get Progress State</span> function. To change the progress, call <span class="function">Update Progress State</span> on the object. You can build functionality using the <span class="function">On Progress State Change</span> event.

![](../../../assets/executable-objects/ProgressState-large.jpg)

* **You can define the Object should do when its progress is completed.** This happens when the progress reaches its start or end. You can control what happens on completion using the <span class="variable">On Progress Completed</span> variables, or using the <span class="function">On Progress Completed</span> event. This means that, unlike <span class="variable">Executable Objects With Duration</span>, <span class="object">Progess Objects</span> do not need to end when their Duration is over.

![](../../../assets/executable-objects/ProgressObjectVars-large.jpg)

![](../../../assets/executable-objects/onprogressCompleted-large.jpg)

## Which class to use?

![](../../../assets/executable-objects/subclasse03-large.jpg)

Which class of Executable Object to use, depends on the result you are trying to achieve. Here are some general recommendations.

|**Class**|**When to use**|**Examples**|
|------------------|------------------------------|-----|
|<span class="object">Executable Object</span>  |Any action you want to end manually, or where you build the action in a way where it ends itself.  |Actions that wait for something to change on an actor|
|<span class="object">Executable Object With Duration</span>    |Actions you want to end automatically. This will require only the function call to start the execution.	|Status effects, Abilities|
|<span class="object">Progess Objects</span>	|Cases where you want to interpolate between different states or values.	|Repositioning a Scene Component, Gradually updating a variable, Anything that involves interpolation|

## Reparenting an Executable Object

If you have already created an Executable Object and want to change the parent class later, you can do so in the *Class Settings*.

![](../../../assets/executable-objects/Reparent-large.jpg)