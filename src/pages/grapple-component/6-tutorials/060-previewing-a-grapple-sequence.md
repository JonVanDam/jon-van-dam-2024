---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Previewing a Grapple Sequence'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 060
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

**This tutorial will guide you through the process of placing a Grapple Sequence Preview actor in your game world, and using said actor to tweak your Grapple Sequences without having to initiate them through gameplay.**

Navigate to the *Place Actors* window. If it is not shown by default, you can open it by clicking on Window > Place Actors.

![](../../../assets/grapple-component/place-actors.jpg)

In this window, select the *All Classes* option.

![](../../../assets/grapple-component/all-classes.jpg)

Select <span class="object">GSPreviewActor</span> and drag it in to your level.

![](../../../assets/grapple-component/gsprev.jpg)

Make sure the Preview Actor is selected and navigate to its *details* panel.

![](../../../assets/grapple-component/prev-det.jpg)

Make the following changes to the exposed variables of the Preview Actor:

* Change the <span class="variable">Previewed Grapple Sequence</span> to the Grapple Object you are working on.

* Change the <span class="variable">Default Character Preview Class</span> to the Character you want to use during the preview.

![](../../../assets/grapple-component/gsp-settings.jpg)

Start simulating the game. This is done by clicking the small arrow next to the Play button and selecting the simulate option. Alternatively, you can use keyboard shortcut ctrl+s.

![](../../../assets/grapple-component/simulate-game.jpg)

The Preview Actor will now spawn the required amount of Characters and Initiate a Grapple Sequecence based on the selected Grapple Object, with the preview Characters as Participants.

![](../../../assets/grapple-component/preview-gameplay.jpg)

While making changes to your Grapple Data, you can now press 'Simulate' in the Blueprint Editor and view your changes directly in any viewport!

![](../../../assets/grapple-component/prev01.jpg)

![](../../../assets/grapple-component/prev02.jpg)











[Grapple Sequence](/grapple-component/1-overview-of-the-grapple-component/basic-concepts)

[Local Grapple Data](/grapple-component/2-effects-of-the-grapple-component/010-grapple-data)

<span class="object">Struct_GC_SequenceCameraData</span>

[title](https://www.example.com)

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |