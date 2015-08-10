# Competitve-JavaScript
List of optimizations necessary for faster execution of JavaScript

Following areas can be improved for better performance:

### Speed (loops,array element lookup, switch cases, conditional)

This includes programs like calculating 25000th prime number, which in JavaScript is around 10x slower than languages like c,c++ using the same algorithm

### Memory (large numbers, large array) 

This includes programs like calculating factorial of a large number(say 1000) while in JavaScript if you try to calculate factorial above 170 it gives you infinity because it exceeds language's number limit

### Repo Structure

All the programs are grouped under speed and memory and are placed inside ````src/programs```` directory. Each program is then divided into three implementations:

1. Brute force algorithm and non optimized javascript.
2. Brute force algorithm and optimized javascript.
3. Optimized algorithm and optimized javascript.
