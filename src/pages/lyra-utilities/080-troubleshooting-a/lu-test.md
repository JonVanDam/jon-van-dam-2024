---
layout: ../../../layouts/MarkdownPostLayout.astro
title: LU Test
createdAt: '2024-11-11'
updatedAt: '2024-11-11'
sortOrder: 1
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

Most Unreal Engine projects and asset packs Manny and Quinn as character templates. This includes Lyra. That said, the Game Animation Sample pack uses the *Unreal Editor For Fortnite* (UEFN) mannequin for all of its animations and for its motion matching system.

These templates are *almost* compatible out of the box, but may need some modifications to work properly.

- On <span class="object">SK_Mannequin</span>, rename the virtual bones between the hands to *VB Hand_r_Hand_l* and *VB Hand_l_Hand_r*.

- If you are using <span class="object">SKM_Manny</span> or <span class="object">SKM_Quinn</span> for your character, open these assets with the skeletal mesh editor plugin, and add a bone named *Attach* just below the root bone.

- Open both <span class="object">SK_Mannequin</span> and <span class="object">SK_UEFN_Mannequin</span>, and make them compatible with one another.

- Stranglely, setting the retarget source asset on the animations to <span class="object">SKM_UEFN_Mannequin</span> breaks the overlay system. 

- Retarget all animation sequences used to <span class="object">SKM_Manny</span>.

- Set the skeleton used for all other animation assets to <span class="object">SK_Mannequin</span>.

- When playing animations authored on <span class="object">SKM_UEFN_Mannequin</span> on Manny or Quinn, the neck and head appear to be sinking into the body. This can be resolved by removing translation data on the bone *Spine_05*.

You should now be able to freely swap out skeleons between animation assets.
