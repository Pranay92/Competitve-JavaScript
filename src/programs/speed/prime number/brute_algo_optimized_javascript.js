function Prime(n) {

	var primes = [2,3,5,7],
		start = 8,
		index = 5;

	n += 1;
	
	while(index < n) {
		if(isPrime(start,primes)) {
			primes.push(start);
			index++;
		}
		start++;
	}

	return primes[primes.length - 1];

}

function isPrime(num,primes) {

	var index = 0,
		len = primes.length,
		isValid = true;

	while(index < len) {
		if(num % primes[index] == 0) {
			isValid = false;
			break;
		}
		index++;
	}	

	return isValid;
}



console.log(Prime(25000));