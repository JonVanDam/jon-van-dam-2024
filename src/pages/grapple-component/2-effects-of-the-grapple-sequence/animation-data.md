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

## struct_GC_AnimationData

The Grapple Component processes animation instructions when the <span class="function">Update Animation (Input)</span> function is called. These animation updates are processed in the Linked Anim Instances of the Grapple Component. By default, this is the Linked Anim Graph that has been placed in the Character's Animation Blueprint.

These animation instructions are stored in a variable structure called <span class="object">struct_GC_AnimationData</span>.

|                                                |                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Animation Type                                 | Member variable type <span class="object">Enum_GC_AnimationType</span> <br>Specifies the type of animation to be used (Anim Sequence, Blendspace or Animation Montage).                                                                                                           |
| Montage - Asset                                | In case Montage is selected under Animation Type, the Animation Montage asset that will be used is selected here.                                                                                                                                                                 |
| AnimSequence - Asset                           | In case Anim Sequence is selected under Animation Type, the Anim Sequence asset that will be used is selected here.                                                                                                                                                               |
| Blendspace - Asset                             | In case Blendspace is selected under Animation Type, the Blendspace asset that will be used is selected here.                                                                                                                                                                     |
| Blend time                                     | The desired blend time between animations.                                                                                                                                                                                                                                        |
| Start Time                                     | The initial position of the animation (in seconds)                                                                                                                                                                                                                                |
| Play Rate                                      | The play rate of the animation                                                                                                                                                                                                                                                    |
| Loop                                           | Whether the animation should loop (start over when it is finished)                                                                                                                                                                                                                |
| Force restart animation                        | Whether to force the animation to restart if the same asset is already playing                                                                                                                                                                                                    |
| Root Motion Enabled                            | Whether to enable root motion during the animation.                                                                                                                                                                                                                               |
| Montage - Section - Jump to                    | In case Montage is selected under Animation Type, the section to jump to. If this member variable is set to 'none' the section will remain unchanged.                                                                                                                             |
| Montage - Section - Set Next - Updated Section | In case Montage is selected under Animation Type, the function Montage Set Next Section will be called on the Animation Blueprint. This member variable will be passed on to the parameters of this function. It should contain the name of the section that needs to be changed. |
| Montage - Section - Set Next - Desired Section | In case Montage is selected under Animation Type, the function Montage Set Next Section will be called on the Animation Blueprint. This member variable will be passed on to the parameters of this function. It should contain the name of the next section.                     |
