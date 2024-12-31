---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Animation Data'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 3
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Animation Data

The Grapple Component processes animation instructions when the <span class="function">Update Animation (Input)</span> function is called. These animation updates are processed in the Linked Anim Instances of the Grapple Component. By default, this is the Linked Anim Graph that has been placed in the Character's Animation Blueprint.

These animation instructions are stored in a variable structure called <span class="object">struct_GC_AnimationData</span>.

| Member variable | Description |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="variable">Animation Type</span>                                 | Specifies the type of animation to be used (Anim Sequence, Blendspace or Animation Montage).                                                                                                           |
| <span class="variable">Montage - Asset</span>                                | In case Montage is selected under Animation Type, the Animation Montage asset that will be used is selected here.                                                                                                                                                                 |
| <span class="variable">AnimSequence - Asset</span>                           | In case Anim Sequence is selected under Animation Type, the Anim Sequence asset that will be used is selected here.                                                                                                                                                               |
| <span class="variable">Blendspace - Asset</span>                             | In case Blendspace is selected under Animation Type, the Blendspace asset that will be used is selected here.                                                                                                                                                                     |
| <span class="variable">Blend tim</span>e                                     | The desired blend time between animations.                                                                                                                                                                                                                                        |
| <span class="variable">Start Time</span>                                     | The initial position of the animation (in seconds)                                                                                                                                                                                                                                |
| <span class="variable">Play Rate</span>                                      | The play rate of the animation                                                                                                                                                                                                                                                    |
| <span class="variable">Loop</span>                                           | Whether the animation should loop (start over when it is finished)                                                                                                                                                                                                                |
| <span class="variable">Force restart animation</span>                        | Whether to force the animation to restart if the same asset is already playing                                                                                                                                                                                                    |
| <span class="variable">Root Motion Enabled </span>                           | Whether to enable root motion during the animation.                                                                                                                                                                                                                               |
| <span class="variable">Montage - Section - Jump to</span>                    | In case Montage is selected under Animation Type, the section to jump to. If this member variable is set to 'none' the section will remain unchanged.                                                                                                                             |
| <span class="variable">Montage - Section - Set Next - Updated Section</span> | In case Montage is selected under Animation Type, the function Montage Set Next Section will be called on the Animation Blueprint. This member variable will be passed on to the parameters of this function. It should contain the name of the section that needs to be changed. |
| <span class="variable">Montage - Section - Set Next - Desired Section</span> | In case Montage is selected under Animation Type, the function Montage Set Next Section will be called on the Animation Blueprint. This member variable will be passed on to the parameters of this function. It should contain the name of the next section.                     |

## Animation type

The enumeration <span class="object">Enum_GC_AnimationType</span> is used to select the type of animation update we want to process when playing animation from the Grapple Component. These modes act as 'channels' that the Animation Blueprint switches between. 

| **Member variable** | **Description** |
| ----------- | ----------- |
| <span class="variable">Stop All</span>  | Stop all animation currently being played by the Grapple Component. |
| <span class="variable">AnimSequence</span>  | Use an Animation Sequence as the source for the animation. This can be user-friendly because external animation assets are typically imported into the Engine as Animation Sequences. |
| <span class="variable">Montage</span>  | Use an Animation Montage as the source for the animation. Montages are the most suitable way to create a Grapple sequence. They support the use of Montage Slots, Sections, and are more stable in multiplayer projects They also enable users to combine and selectively play animations that are contained in a single asset. |
| <span class="variable">Blendspace</span>  | Use a Blend Space as the source for the animation. Blend Spaces are assets that allow any number of animations to be blended between based on the values of multiple inputs. |
| <span class="variable">Unchanged</span>  | Do not change the animation. |

## Generating Animation Data

Animation Data can be generated using a Make <span class="object">struct_GC_AnimationData</span> node. This node contains all of the pins that make up the Animation Data.

![](../../../assets/grapple-component/make-animation-data.jpg)

Alternatively, it is possible to use any of the following Macros:

*<span class="function">Macro - Make Animation Data (Simplified)</span> 
*<span class="function">Macro - Make Animation Data (Montage)</span> 
*<span class="function">Macro - Make Animation Data (Montage + Section)</span> 
*<span class="function">Macro - Make Animation Data (Anim Sequence)</span> 
*<span class="function">Macro - Make Animation Data (Blendspace)</span> 
*<span class="function">Macro - Make Animation Data (Stop All)</span> 
*<span class="function">Macro - Make Animation Data (Unchanged)</span> 

![](../../../assets/grapple-component/animation-data-macros.jpg)

## Animation Updates

Animation can be updated through the Grapple Component by using node <span class="function">Update Animation (Input)</span>. During a Grapple Sequence, it is also possible to update Animation Data on multiple Participants using node <span class="function">Update Animation for Multiple Participants (Input)</span>. 

These events take the input of a <span class="object">struct_GC_AnimationData</span> variable structure, either in the form of a single variable or an array.

Animation is also updated at the beginning and at the end of a [Grapple Sequence](/grapple-component/1-overview-of-the-grapple-component/010-basic-concepts), if any animation data is provided in the [Local Grapple Data](/grapple-component/2-effects-of-the-grapple-sequence/010-grapple-data).