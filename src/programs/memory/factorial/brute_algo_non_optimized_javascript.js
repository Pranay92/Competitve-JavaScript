function factorial(n) {
	if(n <= 1) {
		return 1;
	}

	return n * factorial(n-1);
}


console.log(factorial(10));

// factorial of any number above 170 gives infinity in JS
console.log(factorial(171));