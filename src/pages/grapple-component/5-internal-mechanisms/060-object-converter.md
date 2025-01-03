---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Object Converter'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 060
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Functioning of the Object Converter Blueprint

The Object Conversion Blueprint converts Input Objects to different Output Objects based on a specified modifier.

* The <span class="object">ObjectConversion</span> base Class only contains a <span class="function">Convert Object</span> function that converts Input Objects to Output Objects  based on Modifier Objects.

* The <span class="object">ObjectConversion_StoredData</span> child Class contains a list of  combinations of Input Objects and Modifiers, with each combination mapped to a pre-defined Output Object. This is done as follows:

* Function <span class="function">Convert Object</span> converts an Input Object to an Output Object based on a Modifier Object.

* Variable <span class="variable">Object Conversion Mappings</span> on the Object Converter Blueprint contains all possible input objects, all posisble Modifiers for that input object, and the output objects they should be converted to based on each Modifier. 

* An object can be converted if it is found as a key in variable <span class="variable">Object Conversion Mappings</span>. Each key in this map (i.e. each object that can be converted) is mapped to a value of type <span class="object">Struct_ObjectConversion</span>. An object will be converted based on a certain Modifier, if that Modifier is found in the Struct_ObjectConversion mapped to the input object. The value the command is mapped to, will be the output object (i.e. the object the input object is converted to).

![](../../../assets/grapple-component/obj-conv-01.jpg)

## Application: selecting animation assets based on Skeleton

The Object Converter Blueprint is used by the Grapple Component to convert one animation asset (Montage, Anim Sequence or Blendspace) to another, based on the relevant Skeleton.  

This is done by using the original assets from the [Animation Data](/grapple-component/2-effects-of-the-grapple-sequence/030-animation-data) as Input Objects, and the name of the Skeleton asset on the targeted Character as the Modifier. The Grapple Component then uses an Object Conversion Blueprint defined by the user, where all relevant animation assets are mapped to their counterparts on different Skeletons. In the Sample Content, this Object Converter Blueprint is **<span class="object">AnimationRemappingData</span>**. 

* The sample content contains one Grapple Sequence that has been set up to be played on Skeletal Meshes using <span class="object">UE4_Mannequin_Skeleton</span> as well as <span class="object">TutorialTPP_Skeleton</span>. To this end, Animation Montages <span class="object">a_grapple_spinningkick_00_Montage</span> and <span class="object">a_grapple_spinningkick_01_Montage</span> were retargeted to another Skeleton. 

* Object Conversion Blueprint <span class="object">AnimationRemappingData</span> was set up to convert the relevant Animation Montages to their counterparts on the other Skeleton. A visual explanation of this system is provided below. 

<embed src="/pdf/slide-object-converter.pdf" width="100%" height="520px" toolbar=0 frameborder="0" scrolling="no" />


