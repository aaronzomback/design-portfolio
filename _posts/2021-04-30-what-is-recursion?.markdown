---
title: What is recursion?
date: 2021-04-30 11:53:00 Z
excerpt: Testing
---

![martin-rancourt-IGTbJYQfusY-unsplash.jpg](/uploads/martin-rancourt-IGTbJYQfusY-unsplash.jpg)

## To recurse or not to recurse...

Recursion is an extremely powerful concept and despite its functional elegance, quite often it's not so intuitive to understand. We're used to thinking linearly and with simple cause-effect relationships. So when we encounter the idea of something calling itself, things start to get fuzzy.

To understand recursion, it's first helpful to pose the following question: *why would we ever need to use it in the first place?* Once we begin to identify situations in which recursion can be used to help solve computational problems we can then begin to appreciate its profundity and its elegant but mind-bending functionality.

Problems that are too difficult or verbose to express in procedural terms are often prime targets for recursion (no pun intended). Let's take for example the JavaScript function [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). This function transforms any JavaScript object or value into JSON string format. On the surface, this function may seem simple, but when we begin to input deeply nested objects containing different values such as arrays of arrays and other objects containing further key-value pairs, the goal of stringifying the entire input becomes much more cumbersome.  

## Diving into the unknown

Recursion in essence is the act of reducing a problem down to its root or *atomic* element. This is when we have a problem that's been referring to itself, and it reaches a point at which it can no longer be reduced to simpler terms. Once we've reduced the problem to its root element or *base case*, we then return back upwards integrating the results and returning the output as a solution.

The significance is that recursion allows us to write functions that'll jump into unknown depths and keep running deeper and deeper until an irreducible element is found. As stated above, once this base condition is met, the previous function calls finally return each of its previous values and we get our solution. 

This is can be visualized in a similar fashion with the inflating and subsequent popping of a balloon. The ballon keeps inflating and inflating until it reaches a point of resistance - it can no longer be inflated due to its pressure and limited capacity - and then pops back. Similarly, when we have a function repeatedly calling itself, it populates the [call stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/), with no chance of returning its values, until it reaches the root limitation and then finally the values are returned back.

## Stringified recursively

How can we write a function that'll be able to convert such complex objects, with an unknown amount of depth, into strings?

A great approach towards solving these problems is to identify the simplest cases. In the stringify case, these would mostly be when the values are the primitive types: string, number, boolean, & undefined. These are our base cases and each time we encounter these they can be transformed into strings with a single operation.

We'd then need to consider the cases when the inputs are not these primitive types but rather the mutable types such as objects and arrays. In these instances, we'd continue to call the function on itself until reaching one of the previous base cases. We are aggressively diving into each mutable data type until reaching its irreducible terms.

## Recursive code

Rather than visualize the stringify solution a more simple problem to express is the classic factorial problem.

A factorial is when we take an integer *n* and we solve for the product of itself multiplied by all its previous (n-1) integers until reaching 1.

As an example, lets take the number 5. The factorial of 5 (5!) is 5 x 4 x 3 x 2 x 1 = 120.

One way we could write a function to express the factorial of any integer is by using a simple for-loop:

```
function factorial(n) {
   let product = n;
  for (let i = n; i > 1; i--) {
    product = product * (i - 1) 
  }
   return product;
}
```

However, for those who appreciate aesthetics, for-loops represent a less declarative style as compared to recursion which often reads more easily.

For example, to implement this factorial recursively we'd write this:

```
function recursiveFactorial(n) {
    if (n === 1) {
     return 1;
    }
    return n * recursiveFactorial(n-1);
}
```

Notice how we call our function successively on (n-1) until we reach our base case when n is equal to 1. From there all of our previous function calls return their values - the product of n * (n-1) for each call - and we get our solution.

## Limitations

Unlike in nature, computation involves limited resources such as memory. We must be very careful when we write recursive functions to always include a base case so as not to blow the call stack resulting in *stack overflow*. 

One of the caveats of recursive functions is that they are relatively expensive in terms of allocating a machine's memory. When we talk about Big O notation and complexity often times we can find more performant solutions without using recursion. 

So despite its elegance and breadth of scope, we must be very selective when we choose to use it for a solution, keeping these limitations in mind.

## Wrap up 

We can find the concept of recursion or *self-similarity* expressed throughout nature from the biological growth of plants to snowflakes to the mathematical modeling of fractals.

A way to view recursion is as an extremely aggressive diving function that refers to itself. It's automated to dive deeper and deeper into the problem, calling itself, until it reaches the core - as if it were jumping through the same hoops until finding the root.

It's an often powerful way to express solutions for problems that otherwise would be too cumbersome to write.

![200.gif](/uploads/200.gif)

    
   