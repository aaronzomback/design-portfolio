---
title: What is recursion?
date: 2021-04-30 11:53:00 Z
excerpt: Testing
---

![martin-rancourt-IGTbJYQfusY-unsplash.jpg](/uploads/martin-rancourt-IGTbJYQfusY-unsplash.jpg)

## To recurse or not to recurse...

Recursion is an extremely powerful concept and despite its functional elegance, quite often it's not so intuitive to understand. We're used to thinking linearly and with simple cause-effect relationships. So when we encounter the idea of something calling itself, things start to get fuzzy.

To understand recursion, it's first helpful to pose the following question: *why would we ever need to use it in the first place?* Once we begin to identify situations in which recursion can be used to solve computational problems that would otherwise be difficult or *verbose* to express, we can then begin to appreciate its profundity and its elegant but mind-bending functionality.

Let's take for example the JavaScript function [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). This function transforms any JavaScript object or value into JSON string format. On the surface, this function may seem simple, but when we begin to input deeply nested objects containing different values such as arrays of arrays and other objects containing further key-value pairs, the goal of stringifying the entire input becomes much more cumbersome.

## Diving into the unknown

How can we write a function that'll be able to convert such complex objects, with an unknown amount of depth, into strings? 

We can observe the expression of recursion throughout nature, from the biological growth of plants to the mathematical modeling of fractals. The concept of self-similarity or something calling upon itself is ubiquitous.

Taking a step back though from this expansive view of recursion, we can simplify its scope. Recursion in essence is the act of reducing a problem down to its most root element. That is a problem that has been referring to itself reaches a point at which it can no longer be reduced to simpler terms. Once we've reduced the problem to its root element or *base case*, we then return back upwards integrating the results and returning the output as a solution.

Another way to view recursion is as an extremely aggressive function. It automatically dives deeper and deeper into the problem until it reaches the core, as if it were jumping through the same hoops until finding the root.

![200.gif](/uploads/200.gif)

    
   