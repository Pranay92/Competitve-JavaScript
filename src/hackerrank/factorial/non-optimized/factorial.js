function factorial(n) {
  if(n <= 1) {
    return 1;
  }

  return n * factorial(n-1);
}


console.log(factorial(process.argv[3] || process.argv[2])); 