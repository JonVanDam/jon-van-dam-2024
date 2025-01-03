---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Overridable functions'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 2
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

The Grapple Object contains some events that can be implemented to facilitate the creation of your own Grapple Sequences.

More information on these functions and events events can be found in the '['Grapple Sequence Tutorial' Object](/grapple-component/6-tutorials/030-gctutorial). This Graph also contains copies of the relevant nodes. 

![](../../../assets/grapple-component/gstut-overview.jpg)

## Events related to the Grapple Sequence (without default functionality)

The following events and functions can be implemented on the Grapple Object to add your own functionality.

| **Function/Event** | **Description** |
| ----------- | ----------- |
| <span class="function">On Initiate	</span> | Called when the Grapple Sequence has been Initiated (i.e. when it has started, regardless of whether any Participants are present). The time the Grapple Sequence was initiated is used to synchronize animation and to calculate when the Grapple Sequence should end. |
| <span class="function">On Terminate (Before)	</span> | Called right before the Grapple Sequence is terminated (i.e. when it has ended, regardless of whether any Participants are present). This can be useful if you still need some references that were present during the Grapple Sequence. |
| <span class="function">On Terminate (After)	</span> | Called when the Grapple Sequence has been terminated (i.e. when it has ended, regardess of whether any Participants are present). When a Grapple Sequence is Terminated, all Participants are ejected. |
| <span class="function">On Termination Authorized	</span> | Called by the Grapple Component when Termination is authorized. This is done using function Authorize Termination (Input). |
| <span class="function">On Construct	</span> | Called by the Grapple Component when the Grapple Object is constructed. A Grapple Object is constructed whenever it is needed by the Grapple Component. This can be the case when initiating a Grapple Sequence, when performing a Grapple Attempt or when Executing a Grapple Object. If  variable Grapple Object is Persistent is set to true, the Grapple Object is only constructed once. |
| <span class="function">On Apply	</span> | Called after the effects from the Grapple Sequence have been applied. This function can be implemented as an event and is a good place to implement functionality that needs to run whenever a Participant is entering the Grapple Sequence. This function can be overridden in combination with <span class="function">On Revert</span> if you want to create a temporary state that is only activated during the Grapple Sequence. |
| <span class="function">On Revert	</span> | Called right before the effects from the Grapple Sequence are reverted. This function can be implemented as an event and is a good place to implement functionality that needs to run whenever a Participant is leaving the Grapple Sequence. This function can be overridden in combination with <span class="function">On Apply</span> if you want to create a temporary state that is only activated during the Grapple Sequence. |
| <span class="function">On Perform Grapple Attempt	</span> | Called when a Grapple Component executes a Grapple Attempt based on this Object. |

## Events related to the Grapple Sequence (with default functionality)

The following events and functions can be overridden on the Grapple Object to replace the built-in functionality with your own functionality. If you wish to maintain the built-in functionality, make sure to add a call to the parent function in the Graph as well.

| **Function/Event** | **Description** |
| ----------- | ----------- |
| <span class="function">Apply Grapple Sequence Effects</span> | Applies the influence from the Grapple Sequence. It is recommended to keep a call to the parent function, as it provides some base functionality. In case you are looking for a more designer-friendly way of adding functionality based on the needs of a specific Grapple Sequence, consider overriding function <span class="function">On Apply</span> instead.  |
| <span class="function">Revert Grapple Sequence Effects</span> | Reverts the influence from the Grapple Sequence. It is recommended to keep a call to the parent function, as it provides some base functionality. In case you are looking for a more designer-friendly way of adding functionality based on the needs of a specific Grapple Sequence, consider overriding function <span class="function">On Revert</span> instead. |
| <span class="function">On Execute</span> | Called by the Grapple Component when the Grapple Object is Executed. This method can be used instead of the 'Grapple Attempt' node on the Grapple Component, in case the user wishes give additional instructions related to this Grapple Object, rather than just performing a Grapple Attempt. By default, the 'On Executed' function simply performs a Grapple Attempt based on the Grapple Object. |
| <span class="function">On Grapple Attempt Success	</span> | Called by the Grapple Component when it has successfully performed a Grapple Attempt based on this Object. By default, this function clears all Pending Grapple Attempts and initiates a Grapple Sequence with all found Participants, in addition to the Master Grapple component which is inserted as participant 0. |
| <span class="function">On Grapple Attempt Failed	</span> | Called by the Grapple Component when a Grapple Attempt fails based on this Object. It should be noted that Clients will only be notified when a Grapple Attempt fails on the server, if variable Notify if Attempt Fails on Server is set to true.|

## User Commands / Queued Events / Grapple Attempt

| **Function/Event** | **Description** |
| ----------- | ----------- |
| <span class="function">On User Command Received	</span> | Please consult the dedicated section on [User Commands](/grapple-component/4-other-functionality/010-user-commands) for more information.  |
| <span class="function">On Initialize Queued Events	</span> | Please consult the dedicated section on [Queued Events](/grapple-component/4-other-functionality/040-queued-events) for more information. |
| <span class="function">Test Selection Conditions on Candidate	</span> | Please consult the dedicated section on [Grapple Attempts](/grapple-component/3-controlling-the-grapple-sequence/030-grapple-attempt) for more information. |
| <span class="function">Apply Selection Criteria	</span> | Please consult the dedicated section on [Grapple Attempts](/grapple-component/3-controlling-the-grapple-sequence/030-grapple-attempt) for more information. |

