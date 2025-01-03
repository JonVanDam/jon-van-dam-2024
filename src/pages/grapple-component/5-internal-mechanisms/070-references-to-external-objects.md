---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'References to external objects'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 070
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Functions in Category 'External References'

The Grapple Component uses different functions that acquire references to other Objects that the Grapple Component needs for its different functionalities. These functions can be found in category '*External References*'. 

![](../../../assets/grapple-component/ext-ref.jpg)

## Search Scene Component

### Search Commands

Function Search Scene Component on Blueprint Interface BI_GrappleComponentInterface finds a Scene Component that is in some way linked to an Object, based on an input Search Command. This Search Command functions as a sort of 'tag' which is used to uniquely identify a Scene Component when interfacing with a specific Object. 

For example, when performing this function on a Character Blueprint: 

* Search Command "**CharacterMesh**" could return the main Skeletal Mesh used by the Character; and

* Search Command "**DefaultGrappleHitbox**" could return the Primitive Component that is used to search for Participants when performing a Grapple Attempt.

An example of how this function could be implemented is shown below. 

![](../../../assets/grapple-component/ssc1.png)

### Function Search Scene Component on Object

A way of calling this Function with some extra functionality from the Grapple Component, is by using function <span class="function">Search Scene Component On Object</span>. This function attempts to perform the Interface call on the target object. The parameters of this function add the following functionality.

* <span class="variable">Only Accept Primitive Components</span>: this parameter provides the option to filter the output so that only Primitive Components are accepted. 

* <span class="variable">Search By Tag If Not Found</span>: this parameter allows users to find a Scene Component based on its component tags, if the Input Object is an Actor. This means that you can also use the function by changing the component tags on the Input Object, without needing to implement the Interface.

![](../../../assets/grapple-component/ssc2.png)

## Attachment Definitions

The Grapple Component sometimes uses an attachment definition to refer to a Scene Component, or to a transformation relative to it.

This is done using a variable structure of type <span class="object">struct_GC_AttachmentDefinition</span>. This variable structure contains instructions for finding a Transform in the context of a Grapple Sequence.

| Member veriable | Description |
| ----------- | ----------- |
| <span class="variable">Selection Type	</span> | The type of Scene Component to look for. |
| <span class="variable">Reference Participant Index</span> | The Participant based on which we should look for the Scene Component mentioned above. For example, if 'Actor Root Component' is specified under Selection Type and the Reference Participant Index is 0, this Attachment Definition is referring to the Root Component of the Master Grapple Component ( = the Participant with index 0). |
| <span class="variable">Search Command Input</span> | In case Search Command is selected under selection type, the Grapple Component calls function "Search Scene Component" (from Blueprint Interface "BI_GrappleComponentInterface") on the owning actor. This Interface function can be implemented if you want to look up a specific Scene Component based on an input command. This member variable contains the Search Command that will be used. |
| <span class="variable">Custom Scene Component Input	</span> | In case '*Custom*' is specified under Selection Type, a Scene Component Object reference can be input here. |
| <span class="variable">Socket Name</span> | The Socket on the Scene Component specified above that we should base out Transform on. |
| <span class="variable">Relative Transform	</span> | The relative transformation (either to the Socket or the Scene Component itself) |

Attachment definitions can be applied using function <span class="function">Apply Attachment Definition</span>.

![](../../../assets/grapple-component/att-def.png)