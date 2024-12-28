---
layout: ../../../layouts/MarkdownPostLayout.astro
title: C++ reference
createdAt: '2024-10-17'
updatedAt: '2024-10-17'
sortOrder: 8
seoTitle: ''
seoKeywords: []
seoDescription: ''
---

# UExecutableObject

Blueprintable Async Action with expanded functionality. Use the Execute Object node to construct and start execution.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | ExecutableObject.h |
| **Include** | #include ExecutableObject.h |

# UExecutableObjectWithDuration

Executable Object that ends automatically after a set duration.


| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | ExecutableObjectWithDuration.h |
| **Include** | #include ExecutableObjectWithDuration.h |

# UProgressObject

Executable Object with duration that applied gradual updates over its duration. Progress Objects can be paused and reversed, and can have custom behaviour when progress is completed.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | ProgressObject.h |
| **Include** | #include ProgressObject.h |

# IManagingObjectInterface

Interface designed to be implemented by the Managing Object that is running an Executable Object. The Executed Object will notify the Managing Object when it starts, ends, and when it processes an update.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | ManagingObjectInterface.h |
| **Include** | #include ManagingObjectInterface.h |

# URepositionObject

Executable Object that gradually moves a Scene Component from one transformation to another.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | RepositionObject.h |
| **Include** | #include RepositionObject.h |

# UExecutableObjectSubsystem

Executable Object that gradually moves a Scene Component from one transformation to another.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | ExecutableObjectSubsystem.h |
| **Include** | #include ExecutableObjectSubsystem.h |

# FTransformDefinition

Variable Structure that describes the transformation of a Scene Component in general terms (base local/world transform, attach parent and attach socket). It be generated on the current state of the Scene Component, and can be converted to a world transformation.

| **Module** | ExecutableObjects |
| ----------- | ----------- |
| **Header** | TransformDefinition.h |
| **Include** | #include TransformDefinition.h |

# UK2Node_ExecuteObject

Variable Structure that describes the transformation of a Scene Component in general terms (base local/world transform, attach parent and attach socket). It be generated on the current state of the Scene Component, and can be converted to a world transformation.

| **Module** | ExecutableObjectsEditor |
| ----------- | ----------- |
| **Header** | K2Node_ExecuteObject.h |
| **Include** | #include K2Node_ExecuteObject.h |