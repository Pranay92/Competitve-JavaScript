function processData(input) {
  
  input = parseInt(input);

  function factorial(n) {
    
    if(n <= 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  console.log(factorial(input));
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
