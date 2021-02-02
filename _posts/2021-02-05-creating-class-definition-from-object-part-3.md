---
layout: single
title: "Creating a Class Definition from an Existing Object - Part 3"
excerpt: "Learn about PowerShell class methods and detecting property types in this second part of this Iron Scripter challenge walk-through."
date: 2021-02-05
header:
  overlay_image: /assets/images/ironscripter/class-definition/Silicone_mold_resin_cast_figure.jpg
  overlay_filter: 0.9
comments: true
tags:
  - powershell
  - powershell concepts
  - custom class
  - psobject
  - pscustomobject
  - learn powershell
  - iron scripter
  - iron scripter challenge
  - iron scripter walk-through
category:
  - powershell
---

![Image Text](/assets/images/ironscripter/class-definition/Silicone_mold_resin_cast_figure.jpg)
{: .full}

## A PowerShell Conversion Challenge

In this article, the last in a series on my solution to the IronScripter [PowerShell Conversion Challenge][IronScripterChallenge]{:target="_blank"},
I will be exploring and solving for the remaining requirements.
In [part 1][SolutionPart1]{:target="_blank"}, I solved 7 primary requirements and 1 personal requirement.
In [part 2][SolutionPart2]{:target="_blank"}, I solved 3 personal requirements, which included converting property and class names to PascalCase, detecting property types, and hiding properties.

Primary challenge requirements:

- Insert placeholder for methods
- Let the user specify a method
- Be VSCode aware and insert the new class automatically into the current file

My personal requirements:

- Should be recursive.
  - Any object that contains a property which is itself another complex object should generate a separate class definition.
- Contained in a small module, as there will be a few helper functions.

[SolutionPart1]: https://powershell.anovelidea.org/powershell/creating-class-definition-from-object-part-1/
[SolutionPart2]: https://powershell.anovelidea.org/powershell/creating-class-definition-from-object-part-2/
[IronScripterChallenge]: https://ironscripter.us/a-powershell-conversion-challenge/

## Last Week, On Creating a Class Definition

## Recursive

Let


## Part 3 - The Final Solution

Here is my current `ConvertTo-ClassDefinition` function.

<script src="https://gist.github.com/thedavecarroll/a0db4e3b3c97941ddf11e161288408d7.js?file=Part2-ConvertTo-ClassDefinition.ps1"></script>

And here is a sample output from `Get-TwitterUser -ScreenName thedavecarroll | ConvertTo-ClassDefinition -ClassName 'BluebirdPSUser' -HiddenProperty 'id_str'`.

<script src="https://gist.github.com/thedavecarroll/a0db4e3b3c97941ddf11e161288408d7.js?file=Part2-BluebirdPSUserClass.ps1"></script>

## Summary

I originally thought this article was going to complete the challenge but, as I mentioned above, I'm not done.

In this one, I focused on some of my own requirements, namely enforcing PascalCase for class and property names, resolution of property types that are generically cast as `string` objects, and allowing the user to specify properties to hide.

In the next article, I plan to explore and cover the remaining requirements:



I hope you’ve found this interesting or informative.
If you have any comments or questions, please post them below.

Thanks for reading and good luck on the Iron Scripter challenges!
