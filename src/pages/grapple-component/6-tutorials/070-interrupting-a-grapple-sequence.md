---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Interrupting the Grapple Sequence'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 070

seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Grapple Sequences are interactive and can be interrupted at any time. 

To end the Grapple Sequence immediately, use function <span class="function">Terminate Grapple Sequence (Input)</span>
 on the Grapple Component. Terminating the Grapple Sequence will revert its influence and cancel all Queued Events. For example, if you put this setup in your Character's Event Graph, any Grapple Sequence would be interrupted when you press the F key. To add functionality when the Grapple Sequence ends, you can override any of these events.

To transition to another Grapple Sequence, use function <span class="function">Initiate Grapple Sequence With Current Participants (Input)</span>. 

For more detailed information on the topic, please consult the section on [Terminating the Grapple Sequence](/grapple-component/3-controlling-the-grapple-sequence/020-terminating-the-grapple-sequence).

