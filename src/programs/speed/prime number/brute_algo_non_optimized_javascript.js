function Prime(n) {

	var primes = [2,3,5,7],
		start = 8,
		index = 5,
		finalPrime;

	while(index < n) {
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
		isValid = true;

	while(index < num) {
		if(num % index == 0) {
			isValid = false;
			break;
		}
		index++;
	}	

	return isValid;
}



console.log(Prime(25000));