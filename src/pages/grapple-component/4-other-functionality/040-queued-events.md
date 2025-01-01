---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Queued Events'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 4
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Concept

Queued Events occur at a fixed time during the Grapple Sequence, and typically have an influence on gameplay (for example a character being pushed away or taking damage).

Queued Event nodes are typically connected to the event 'OnApplied' on a Grapple Object. This event is called whenever Grapple Data is being applied on a Grapple Component, based on this Grapple Object. Animation also starts to play at this time, making it a good referenc epoint for Queued Events.

<div class="note">The [Grapple Sequence Tutorial Object](/grapple-component/6-tutorials/030-gctutorial)contains a Graph with an example layout for Queued Events.</div>

## Adding Queued Events to a Grapple sequence

Add a Qeueued Event to your Grapple Sequence using the following steps.

Override <span class="function">Event On Initiate</span> in a Graph on a Grapple Object. 

![](../../../assets/grapple-component/qe-on-init.jpg)

<div class="note">It should be noted that Events can be Queued at any time. This means that the construction we are building here could also be connected to other Events, e.g. <span class="function">Event On User Command Received</span> or <span class="function">Event on Apply</span>.</div>

To add a Queued Event, use function <span class="function">Add Queued Event</span>.  On this node you can specify a delay (input parameter <span class="variable">time</span>), as well as the point in time from which this delay should be calculated (input parameter <span class="variable">timeframe</span>). You should also provide a name for the Queued Event (input parameter <span class="variable">Function Name</span>).

If input parameter <span class="variable">Cancelable</span> is set to true, the Queued Event will be cancelled when the Grapple Sequence is Terminated or when function Cancel Queued Events is called on the Grapple Object.

![](../../../assets/grapple-component/add-qe.jpg)

Proceed by adding an event or function to the Grapple Object that has the same name that has been provided to function <span class="function">Add Queued Event</span>. This event should connect to the actual Blueprint logic you want to execute at that specific time.

![](../../../assets/grapple-component/qe-example.png)

Optionally, you can add a <span class="function">Macro - Queued Event Utility</span> node. It contains pins with references to the Master Grapple Component (which by default is always the one linked to the Grapple Object), and also allows to re-route the event to different Participants. By default, this Node also makes sure that no input goes through when the Grapple is no longer active.

The <span class="function">Macro - Queued Event Utility</span> node should then be connected to the actual logic you want to add into the Grapple Sequence. These Events can be called on the Grapple Component or on any Blueprint in your project.

![](../../../assets/grapple-component/qe-utility.png)

Your final setup should look something like this.

![](../../../assets/grapple-component/example-qe-qetup.jpg)

It is also possible to add multiple events at once. The order in which they are added does not matter. All Queued Events will execute at their scheduled time.

![](../../../assets/grapple-component/qe-overview.jpg)

It is also possible to add multiple Queued Events at once using function <span class="function">Add Queued Events</span>.

![](../../../assets/grapple-component/add-qe-multiple.jpg)

It is also possible to add Queued Events in the properties of the Grapple Object. This can be done by modifying the <span class="variable">Queued Events - Preset Queued Events</span> property.

![](../../../assets/grapple-component/qe-presets.jpg)
