---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Debug tools'
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 080
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

## Debug Settings

The Grapple Component contains the following settings related to debugging.

| Setting | Description |
| ----------- | ----------- |
| <span class="variable">Debug - Global Switch	</span> | Whether to allow any of the debug information (normally controlled by the other settings) to be visible. |
| <span class="variable">Debug - Show Virtual Mesh	</span> | Whether to show a visible material on the Virtual Mesh. |
| <span class="variable">Debug - Show UI	</span> | See the section on Debug UI. |
| <span class="variable">Debug - Print Messages	</span> | See the section on Debug Messages. |
| <span class="variable">Debug Color	</span> | The color used to refer to this Grapple Component in the Debug UI. |

Settings related to debugging can be updated in the following ways:

* In the Grapple Component Blueprint itself, by setting the relevant variables in category 'Debug'

![](../../../assets/grapple-component/debug-settings.jpg)

* At runtime, Using event <span class="function">ApplyDebugSettings</span>
 will apply the settings on a single Grapple Component

* At runtime, Using event <span class="function">ApplyDebugSettings_AllGrappleComponents</span> will apply the settings on all Grapple Components

![](../../../assets/grapple-component/update-debug.jpg)

## Debug Messages

The Grapple Component can print messages to the screen ant to the log (using the Print Text function built into the Engine). This can be done using function <span class="object">Debug Message</span>. Messages will be printed if they are enabled in the Debug Settings, or if parameter Always Print (Ignore Settings) is set to true.

![](../../../assets/grapple-component/debug-print.jpg)

## Debug UI

If variable  <span class="variable">Debug - Show UI</span> is set to *true*, the Grapple Component will add a widget of Class <span class="object">UI_GC_DebugHUD</span> to the player screen. This widget contains the following information:

* The name of the Actor this Grapple Component belongs to;
* The reason this widget is visible;
* Either the current Participants Following this Grapple Component or the Master Grapple Component this Grapple Component is following; and
* The active state tags for this Grapple Component.

Widgets will be shown automatically for the Grapple Component on the currently possessed Pawn, as well as for any other Participants if this Grapple Component is currently Participating  in a Grapple Sequence. 

![](../../../assets/grapple-component/debug-widget.jpg)

