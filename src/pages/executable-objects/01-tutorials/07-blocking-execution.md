---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Blocking the execution
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 7
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**In some cases, you may want to control whether an Executable Object is allowed to Execute or not.**

* If this condition is only based on other Executable Objects that are running, you may be able to do so quickly using exclusivity. Please consult the tutorial on [exclusivity rules](/executable-objects/01-tutorials/06-exclusivity)  for more information.

* The condition can also be based on other factors. For example, this would be the case for an Ability that the player can only activate if they are on the ground.

In the latter case, you can override the <span class="function">Can Execute</span> function on your Executable Object.

![](../../../assets/executable-objects/CanExecuteOverride-large.jpg)

![](../../../assets/executable-objects/CanExecuteOverrideeXAMPLE-large.jpg)



<div class="note">If your object makes use of the default [exclusivity rules](/executable-objects/01-tutorials/06-exclusivity) as well, this function override should include a call to the parent function. The object will then only execute if your custom condition is met, and if the Exclusivity Rules are also respected.</div>

![](../../../assets/executable-objects/CanExecuteOverrideeXAMPLE02-large.jpg) 

These tests will run whenever the execution is started using <span class="function">Start Execution</span>, or via the exec pin on the <span class="function">Execute Object</span> node. Depending on whether the test was successful, the Executable Object will call <span class="function">On Execution Failed</span> or start the execution, resulting in <span class="function">On Execution Start</span> being called. It is possible to override these events and add your own functionality. 

![](../../../assets/executable-objects/ConditionConsequence-large.jpg) 

Keep in mind that <span class="function">Can Execute</span> is a constant function. This means that it cannot modify the state of the game world. Therefore, it is not possible to add non-constant functions in its graph. If you get an error stating your function "*cannot be called on 'self' because it is a read-only Target in this context*", follow the steps below to make the function constant as well.

![](../../../assets/executable-objects/TS_Const-large.jpg) 

