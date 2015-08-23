function processData(input) {
   input = input.split('\n');
    
   var cases = parseInt(input[0]),
       index,
       primes = [2,3,5,7],
       counter = 4,
       num = 8;
    
   for(index = 1; index <= cases; index++) {
       genPrime(parseInt(input[index]));
   }
    
   function genPrime(N) {
       
       var currNum;
       
       if(primes[N - 1]) {
           console.log(primes[N - 1]);
           return;
       }
       
       while(true) {
           
           if(primes[N - 1]) {
               currNum = primes[N-1];
               break;
           }
           
           if(!primes[counter] && isPrime(num)) {
               primes.push(num);
               counter++;
           }
           
           num++;
       }
       
       console.log(currNum);
   }
    
   function isPrime(num) {
       var len = primes.length,
           index,
           isPrime = true;
       
       for(index = 0; index < len; index++) {
           if(num % primes[index] == 0) {
               isPrime = false;
               break;
           }
       }
       
       return isPrime;
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
