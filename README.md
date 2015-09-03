# Competitve-JavaScript

Competitive Programming is competing with other programmers while solving problems that require algorithm,math and clever language usage.

## Why JavaScript?

JavaScript is one of the most popular programming languages in the world, but still it is one of the most ignored languages when it comes to competitive programming. This is mainly because of the fact that JavaScript lacks in certain areas that makes it unfavourable, though there are ways which can help overcome these limitations.

Areas that can be improved:

### Speed (loops,array element lookup, switch cases, conditional)

This includes programs like calculating 25000th prime number, which in JavaScript is around 10x slower than languages like c,c++ using the same algorithm

### Memory (large arrays, large no of JSON objects)

This includes programs like storing a 1000 JSON objects which causes memory allocation failure, also note that we don't have database in competitions and everything needs to be done in-memory.

### Language Limitations (large numbers) 

This includes programs like calculating factorial of a large number(say 1000) while in JavaScript if you try to calculate factorial above 170 it gives you infinity because it exceeds language's number limit


This repository will have examples for the above mentioned areas and implementations through which we can overcome these limitations. 

### Repo Structure

All the programs are grouped under speed and memory and are placed inside ````src/programs```` directory. Each program has following implementations:

1. Brute force algorithm and non optimized javascript.
2. Brute force algorithm and optimized javascript.
3. Optimized algorithm and optimized javascript.
