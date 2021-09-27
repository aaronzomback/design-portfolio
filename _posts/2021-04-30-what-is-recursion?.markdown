---
title: What is recursion?
date: 2021-04-30 11:53:00 Z
excerpt: Testing
---

![martin-rancourt-IGTbJYQfusY-unsplash.jpg](/uploads/martin-rancourt-IGTbJYQfusY-unsplash.jpg)

## To recurse or not to recurse...

To understand recursion, it's first helpful to pose the following question: *why would we ever need to use it?*

Once we begin to identify situations in which recursion can be used to solve computational problems that would otherwise be difficult or *verbose* to express, we can then begin to appreciate its power and its elegant but mind-bending functionality.

Let's take for example the JavaScript ```JSON.Stringify()``` function. This function transforms any JavaScript object or value into [JSON](https://www.json.org/json-en.html) string format.

We can observe the expression of recursion throughout nature, from the biological growth of plants to the mathematical modeling of fractals. The concept of self-similarity or something calling upon itself is ubiquitous in our universe.

Taking a step back though from this expansive view of recursion, we can simplify its scope. Recursion in essence is the act of reducing a problem down to its most root element. That is a problem that has been referring to itself reaches a point at which it can no longer be reduced to simpler terms. Once we've reduced the problem to its root element or *base case*, we then return back upwards integrating the results which then allows us to arrive at the solution. 

Another way to view recursion is as an extremely aggressive function. It automatically dives deeper and deeper into the problem until it reaches the core, as if it were jumping through the same hoops until finding the root.

![200.gif](/uploads/200.gif)

    
   