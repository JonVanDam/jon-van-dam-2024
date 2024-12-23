---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Example Content
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 7
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**The Demo Project illustrates some of the functionality of Execuable Objects. It does so using a simple ability system, with activatable abilities, status effects, attributes and interactions. These mechanics are all represented by an Executable Object, and can run without the need for additional components or setup.**

**In this article, we will go over the contents of the demo project.**

# The Demo Character

In the Content/Demo folder, there is a Blueprint named <span class="object">DemoCharacter</span>. Its Graph has some example nodes laid out.

![](../../../assets/executable-objects/DemoCharacter-large-thumbnail.jpg)

![](../../../assets/executable-objects/DemoCharacter-large.jpg)



# Gradually Updating Variables

A simple use case of Executable Objects, is gradually changing the value of a variable. To do this, you can use any of the <span class="function">Gradually Update Variable</span> nodes.

![](../../../assets/executable-objects/GraduallyUpdate-large.jpg)

# Gradually Updating Material Parameters

As another example, the Demo Character has a 'Material Parameter Lerp' node that will change the color of the Character.

![](../../../assets/executable-objects/Material-large.jpg)

# Repositioning

You can use Executable Objects to reposition scene components gradually. This functionality can move characters from one place to another. 

![](../../../assets/executable-objects/Repositioning-large.jpg)

# Update Velocity

Similarly, you can create a 'Dash' or 'Push' effect by updating the velocity of a Character.

![](../../../assets/executable-objects/UpdateVelocity-large.jpg)

# Abilities

You can also use Executable Objects to create simple abilities. For example, the Demo Project has a *Sprint* ability and a *Charged Jump* ability.

![](../../../assets/executable-objects/Ability-large.jpg)

**To create your own Ability:**

* Create a new Blueprint Class with EXE_Ability as the parent Class
* Override the following functions: <span class="function">On Execution Start</span> and <span class="function">Input Release</span>

# Status Effects

Internally, these abilities apply a set of Status Effects while they are active. Status Effects  can, for example, increase the move speed of the character, and widen the field of view of the camera.

![](../../../assets/executable-objects/StatusEffects-large.jpg)

**To create your own Status Effect:**

* Create a new Blueprint Class with <span class="object">EXE_StatusEffect</span> as the parent Class
* Override the <span class="function">On Execution Start</span> event with the logic you need to run when the effect is applied.
* Override the <span class="function">On Execution End</span> event with the logic you need to run when the effect is reverted.

The Demo Project has a Status Effect named <span class="object">SE_Death</span> as an example.

![](../../../assets/executable-objects/EXE_death-large.jpg)

In some cases, your game may need to handle multiple status effect that can overlap, and affect the same attribute. As an example on how to implement this, the Demo Project contains a simple attribute system.

**To create your own Attribute:**

* Create a new Blueprint Class with <span class="object">EXE_BooleanAttribute</span> or <span class="object">EXE_FloatAttribute</span> as the parent Class, depending on the desired type of attribute.
* Override the <span class="function">Get Source Value</span> and <span class="function">Set Source Value</span> functions. They should read and update the game state respectively.

The Demo Project has attributes named <span class="object">ATTR_MoveSpeed</span> and <span class="object">ATTR_Stunned</span> as examples.

![](../../../assets/executable-objects/ATTR_Stunned.jpg)

![](../../../assets/executable-objects/attr_Stunned-large.jpg)

**To modify the attribute you created:**

* Add a new <span class="function">Execute Object</span> node
* Change the Object Class to <span class="object">EXE_FloatAttributeModifier</span> or <span class="object">EXE_BooleanAttributeModifier</span>, depending on the type of the attribute you want to change. Make sure to select one of these exact classes, and not your attribute itself.
* New pins will appear on the node. In here, you can set the desired <span class="object">Attribute</span> you wish to affect. This can be the attribute you just created.
* In the case of a Float Attribute, set an additive value and/or a multiplier. When calculating the attribute value, multiply operations will be applied before add operations.

The abilities <span class="object">AB_Sprint</span> and <span class="object">AB_ChargedJump</span> in the Demo Project show examples of how to activate and revert attribute modifiers. Normally, all Status Effects need to be reverted manually. However, abilities are set up to end all effects that were created from them automatically when the ability ends.

![](../../../assets/executable-objects/sprintAttributes-large.jpg)

# Interactions

You can also use Executable Objects to create interactions between different actors. For example, the Demo Character has a regular takedown move, and a stealth takedown. Depending on whether the other Character is facing us we will activate the stealth takedown or the regular takedown.  

![](../../../assets/executable-objects/Interactions-large.jpg)

These are just some of the features you could build using Executable Objects. Their main strength, is that they are Blueprintable and fully customizable. Want to know how to make your own Executable Objects? Have a look at the [Tutorials](/executable-objects/2-tutorials/01-creating-an-executable-object)!