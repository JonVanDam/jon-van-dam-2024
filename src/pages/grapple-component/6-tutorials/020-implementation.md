---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Implementation'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 020
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Follow these steps to implement the Grapple Component into a Character Blueprint.

## 1. Gather Necessary Assets

Make sure the content in the Grapple Component Content is included in your project.

This can be done by following the instructions in the [Installation](/grapple-component/6-tutorials/010-installation) tutorial.

## 2. Add Grapple Component to your Character Blueprint

Open your Character Blueprint.

Navigate to the *Components* panel.

Add a component of class <span class="object">GrappleComponent</span>.

![](../../../assets/grapple-component/add-component.jpg)

## 3. Create Default Grapple Hitbox (optional)

Optionally, you can add a Box Collision Component (any other [Primitive Component](https://docs.unrealengine.com/en-US/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Actors/Components/index.html#primitivecomponents) will work as well). This component will be used to search for targets.

![](../../../assets/grapple-component/add-box-component.jpg)

If you want the Grapple Component to use this Primitive Component by default, it should have a tag named "*defaultgrapplehitbox*".

![](../../../assets/grapple-component/default-grapple-hitbox.jpg)

## 4. Set up Animation Blueprint 

### Method 1 - Linked Anim Graph (Recommended)

Navigate to the template for the Grapple Component Animation Blueprint (of class <span class="object">GrappleComponent_AnimBP</span>, found in *GrappleComponent/AnimBP*). Create a Child Blueprint Class of this object. 

![](../../../assets/grapple-component/gc-abp.jpg)

On this newly created Blueprint, navigate to the Class Settings and set the <span class="variable">Target Skeleton</span> to be the same one your Character's Skeletal Mesh is using (for example, <span class="object">UE4_Mannequin_Skeleton</span> or <span class="object">SK_Mannequin</span>).

![](../../../assets/grapple-component/skeleton.jpg)

Note that the target skeleton flag is marked as advanced under the class settings. This means that you might need to expand the section to see the option.

![](../../../assets/grapple-component/advanced.jpg)

Open the Animation Blueprint used by your Character's main Skeletal Mesh.

In the Anim Graph of this Blueprint, add a <span class="function">Linked Anim Graph</span> node before your output pose.

![](../../../assets/grapple-component/linked-graph.jpg)

With the newly created node selected, navigate to the *details* panel and set the <span class="variable">Instance Class</span> to be the Animation Blueprint we have just created.

![](../../../assets/grapple-component/details-instance-class.jpg)

The Linked Anim Graph should be placed so that its output influences the output pose of the Animation Blueprint. 

![](../../../assets/grapple-component/linked-graph-method.jpg)

### Method 2 (Montages Only)

It is possible to work without a Linked Anim Graph by simply connecting the Montage Slots you are using to the output pose on your Character's main Animation Blueprint. If you already have montage slots set up, this method requires no implementation at all. 

<div class="note">It should be noted that this method is only viable if your Grapple Sequences use Animation Montages only. This method does not support Blendspaces, Anim Sequences or Animation Matching.</div>

![](../../../assets/grapple-component/montage-method.jpg)

### Method 3 (Manual Implementation)

Animation for Grapple Sequences can also be implemented manually, by using the events from Blueprint Interface <span class="object">BI_GrappleComponentAnimationInterface</span>.

![](../../../assets/grapple-component/manual-impl.jpg)

## Setup Complete!

Your Character is now Compatible with the Grapple Component!

For instructions on how to create your own Grapple Sequence, please proceed to the next tutorial.

<div class="note">If the Grapple Component does not find the Skeletal Mesh of your Character automatically, select the Skeletal Mesh component and give it a tag named "gc_skeletalmesh".</div>



