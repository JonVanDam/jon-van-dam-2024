---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Timestamps'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 020
seoTitle: ''
seoKeywords: []
seoDescription: ''
---


The [Grapple Component](/grapple-component/1-overview-of-the-grapple-component/basic-concepts) and the [Grapple Object](/grapple-component/1-overview-of-the-grapple-component/basic-concepts) store the exact moment at which some events occur in so called timestamp variables. 

## Timestamps on the Grapple Component

The following Timestamps are stored on the [Grapple Component](/grapple-component/1-overview-of-the-grapple-component/basic-concepts):

| Timestamp| Description |
| ----------- | ----------- |
| <span class="variable">Timestamp - Grapple Settings Applied/Reverted</span> | The time function <span class="function">Apply/ Revert - All Pending Grapple Data</span> was used.  |
| <span class="variable">Timestamp - Last Grapple Attempt Tick</span> | The last time a Grapple Attempt was performed in every tick mode.  |

To access them, use the following functions:

| Function| Description |
| ----------- | ----------- |
| <span class="function">Calculate Delay Since</span> | Calculates the delay since the input time. Returns 0 if an invalid timestamp (i.e. one with a value smaller than 0) negative value is provided.  |
| <span class="function">Make Timestamp from Current Time</span> |Get the current server world time from the Game State.  |
| <span class="function">Generate Timestamp if Invalid	</span> | Generates a timestamp if the input timestamp is not valid (value smaller than 0).  |


## Timestamps on the Grapple Object

The following Timestamps are stored on the [Grapple Object](/grapple-component/1-overview-of-the-grapple-component/basic-concepts):

| Timestamp| Description |
| ----------- | ----------- |
| <span class="variable">Timestamp - Last User Command Received</span> | Refers to the time the last [User Command](/grapple-component/4-other-functionality/010-user-commands) was received by this Grapple Object.  |
| <span class="variable">Timestamp - Grapple Sequence Initiated</span> | Refers to the time the Grapple Sequence based on this Object was [initiated](/grapple-component/3-controlling-the-grapple-sequence/010-initiating-the-grapple-sequence).  |
| <span class="variable">Timestamp - Custom</span> | A custom timestamp that can be set using function <span class="function">Set Custom Timestamp based on Current Time</span> or by directly accessing variable <span class="variable">Timestamp - Custom</span>. |
| <span class="variable">Timestamp - Last Participant Update</span> | Refers to the time function <span class="function">Update Participants</span> was last used on this Grapple Object. |


To access them, use the following functions:

| Function| Description |
| ----------- | ----------- |
| <span class="function">Get Timestamp</span> | CGets the stored time based on a timestamp slot.  |
| <span class="function">Get Delay Since Timestamp</span> | Returns the time that has passed since the specified timestamp.  |
| <span class="function">Set Custom Timestamp based on Current Time</span> | Set the value of  variable  <span class="variable">Timestamp - Custom</span> based on the current time.  |

## Usage

### Replication on Input Functions

Many [Input Functions](/grapple-component/3-controlling-the-grapple-sequence/060-input-functions) provide the option to specify a timestamp. This can be useful in case the Input Function is replicated.  If an invalid timestamp (i.e. a negative value) is provided, the Grapple Component will generate a timestamp on the server and replicate it to all Clients. This is the optimal way to manage timestamps, so it is recommended to leave the timestamp parameter on input functions at its default value (-1).

## Corrections when applying Grapple Data

When applying Grapple Data, the Grapple Component can make the following corrections in order to compensate latency between different connections:

* Increase the animation start time. To enable or disable this behaviour, modify variable <span class="variable">Apply Timestamp to Animation Start Time</span> in the [Global Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data) of your Grapple Object. 

* Shorten the duration of the Reposition. To enable or disable this behaviour, modify variable modify variable <span class="variable">Apply Timestamp to Reposition Duration</span> in the [Global Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data) of your Grapple Object.

## Corrections to Queued Event delays

Users can make use of timestamps when adding [Queued Events](/grapple-component/4-other-functionality/040-queued-events). When using function <span class="function">Add Queued Event</span>, set input parameter <span class="variable">Timeframe</span> to the timestamp you wish to use.

To use a custom (user-defined) timestamp, call function <span class="function">Set Custom Timestamp based on Current Time</span> or modify variable <span class="variable">Timestamp - Custom</span> before adding the Queued Event.

If you want to add a Queued Event without any compensation based on timestamps, set the <span class="variable">Timeframe</span> to 'current time'.
