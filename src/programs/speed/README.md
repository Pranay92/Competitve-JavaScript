This module covers common problems that requires faster execution. 

## Tips to optimize speed

### General

1. Initialize values whereever and whenever possible.
2. Avoid using try..catch whenever possible, if still needed wrap the code inside try block into a function and just call the function inside the try block.
3. Avoid changing function signature at run time.

### Arrays

1. Do not use sparse arrays.
2. Always have homogeneous arrays.
3. Avoid array of objects, prefer using 31 bit signed integers. Storing even a single double type value, cause re allocation of buffer memory and then converting each value in the array to be a double type.
4. If required to store heterogeneous values, use array literals and then add all the values in declaration instead of using a for loop (if possible)
5. Don't store non-numeric values in a numeric array which makes it heterogeneous.

