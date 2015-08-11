function Prime(n) {

	var primes = [2,3,5,7],
		start = 8,
		index = 5;
	
	// so that we can use <= 
	n -= 1;

	while(index <= n) {
		if(isPrime(start)) {
			primes.push(start);
			index++;
		}
		start++;
	}

	return primes[primes.length - 1];

}

function isPrime(num) {

	var index = 2,
		isValid = true,
		limit = (num - 1);

	while(index <= limit) {
		if(num % index == 0) {
			isValid = false;
			break;
		}
		index++;
	}	

	return isValid;
}



console.log(Prime(25000));