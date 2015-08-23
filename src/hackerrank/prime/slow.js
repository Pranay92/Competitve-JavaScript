function processData(input) {
  
   input = input.split('\n');
    
   var cases = parseInt(input[0]),
       index,
       primes = [[2,3,5,7]],
       counter = 4,
       num = 8;

   for(index = 1; index <= cases; index++) {
       console.log(Prime(parseInt(input[index])));
   }

  function Prime(n) {

    var primes = [2,3,5,7],
      start = 8,
      index = 5;
    
    if(primes.length > n) {
      return primes[n - 1];
    }
    
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

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
