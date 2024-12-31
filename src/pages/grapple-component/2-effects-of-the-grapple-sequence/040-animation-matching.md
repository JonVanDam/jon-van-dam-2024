---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Animation Matching'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

<div class="note">The Animation Blueprint used for animation matching are designed to be used with the UE5 Manny/Quinn skeleton and the UE4 Mannequin Skeleton. It may not work without modifications if used on skeletal meshes with a different skeleton.</div>

## Typical Use Cases

Some animations will no longer match each other if they are played on skeletal meshes with proportions that are different from the one used for animating.

The Animation Matching feature attempts to remedy this mismatching by a certain extent. If Animation Matching is enabled, the Grapple Component will move the location of certain bones in the owner's skeletal mesh to match the position of certain other bones in the skeletal mesh associated with another Grapple Participant.


## Virtual Mesh Actor

Animations can appear mismatched when they are played on skeletal meshes that have different proportions than the skeletal meshes the animations were originally created in. The Grapple Component can attempt to resolve this mismatching by moving the relevant bones based the Skeletal Mesh on one Participant, based on the Skeletal Mesh of another Participant.

This is done by internally creating an 'ideal scenario', where all relevant animations are being played on their original skeletal meshes. The Grapple Component then takes the relative bone locations from this 'ideal scenario', and applies them to the non-ideal scenario that is taking place in the Grapple Sequence.

The original skeletal meshes mentioned above are added into the game world using a **Virtual Mesh Actor**. This is a Skeletal Mesh Actor, attached to the character mesh. Its skeletal mesh is the same as the one use used to author the animations. This virtual mesh is invisible to players, and only plays the animations that are relevant in a grapple  sequence.


## Animation Matching Settings

### Update Methods

Bones will be moved based on the Animation Matching Settings provided by the user. These settings can be set in the following ways:

* To set the Animation Matching Settings for the duration of a Grapple Sequence, set them in the [Global Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data) of your [Grapple Object](/grapple-component/1-overview-of-the-grapple-component/basic-concepts).

* To change the settings manually, use function <span class="function">Update Animation Matching</span> on the Grapple Component.

* To update the settings based on animation playback, use Animation Notify <span class="object">AnimNotify_Grapple_UpdateAnimationMatchingSettings</span> in your animation asset.

### Animation Matching Data

All of these input methods require the input of Animation Matching Data. This data comes in the form of a variable structure of type <span class="object">struct_GC_AnimationMatching</span>, which contains a set of instructions on how to adjust the animation on the Owner Skeletal Mesh Component in order to match the animation on other Participants. Essentially, the member variables specify the following:

* which bones are being affected;
* based on which bones on the other Participant they should be moved; and
* which other Participant to base these corrections on.


