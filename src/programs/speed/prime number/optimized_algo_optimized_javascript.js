function Prime(n) {

	var primes = [2,3,5,7],
		start = 8,
		index = 5;

	n += 1;

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
		isValid = true,
		sqrt = Math.ceil(Math.pow(num,1/2));

	sqrt += 1;

	while(index < sqrt) {
		
		if(num % index == 0) {
			isValid = false;
			break;
		}

		index++;
	}	

	return isValid;
}



console.log(Prime(25000));