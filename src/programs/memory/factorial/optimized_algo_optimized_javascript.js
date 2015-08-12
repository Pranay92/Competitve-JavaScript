/*
  To calculate factorial of an even number
  
  For even numbers:
    let n = 8
    n! = n + ((n + n-2) =  k) * ((k  + n - 4) =  l) * ((l  + n - 6 ) = m)... while (n-val > 2)
    8! = 8 + ((8 + 8-2) = 14) * ((14 + 8 - 4) = 18) * ((18 + 8 - 6) = 20)
       = 8 * 14 * 18 * 20

  For odd numbers:
    n! = (n - 1)! * n where (n - 1) will be an even number and the above algorithm can be used again
*/

function factorial(n) {

  var isOdd = false;
  
  if(n % 2 !== 0) {
    isOdd = true;
    n -= 1;
  }

  var index,
    limit = n - 2,
    currNum = (n + limit),
    array = [currNum],
    len,
    currLen,
    currProd,
    arr = [],
    diff,
    sum = '0',
    mainprod = n,
    mainlen,
    numlen;

  while(limit > 2) {
    limit -= 2;
    currNum = (currNum + limit);
    array.push(currNum);
  }

  if(isOdd) {
    array.push(n + 1);
  }

  len = array.length;

  while(len--) {

    currNum = array[len].toString();
    numlen = currNum.length;
    currLen = numlen - 1;

    while(numlen--) {
      
      currProd = multiplyStrings(currNum[numlen],mainprod);
      diff = (currLen - numlen);

      while(diff--) {
        currProd += '0';
      }

      arr.push(currProd);
    }

    mainlen = arr.length;

    while(mainlen--) {
      sum = addStrings(arr[mainlen],sum);
    }

    mainprod = sum;
    sum = '0';
    arr = [];

  }

  return mainprod;

  
}

function multiplyStrings(mul,num) {

  var arr = [],
      len,
      currMultiple,
      lastRemainder = null;

  num = num.toString();
  len = num.length;

  while(len--) {
    
    currMultiple = mul * num[len];

    if(lastRemainder) {
      currMultiple += lastRemainder;
      lastRemainder = null;
    }

    currMultiple = currMultiple.toString();
    
    if(currMultiple.length > 1 && len > 0) {
      lastRemainder = parseInt(currMultiple[0]);
      currMultiple = currMultiple[1];
    }

    arr.push(currMultiple);

  }

  return arr.reverse().join('');
}

function addStrings(a,b) {

    a = a.toString();
    b = b.toString();
    
    var aLen = a.length,
        bLen = b.length;
    
    if(aLen < bLen) {
        a = addLeadingZero(a, bLen - aLen);
    }
    
    if(bLen < aLen) {
        b = addLeadingZero(b,aLen - bLen);
    }

    var commonLen = a.length,
        mainSum = '',
        currentSum,
        lastRemainder;
        
    while(commonLen--) {
        currentSum = parseInt(a[commonLen]) + parseInt(b[commonLen]);
        if(lastRemainder) {
            currentSum += lastRemainder;
            lastRemainder = null
        }
        
        if(currentSum.toString().length > 1 && commonLen >= 1) {
            lastRemainder = parseInt(currentSum.toString()[0]);
            currentSum = currentSum.toString()[1];
        }

        if(commonLen == 0) {
          currentSum = reverse(currentSum);
        }
        mainSum += currentSum;
    }
    
    mainSum = reverse(mainSum);
    return mainSum;
}
    
function reverse(s) {
  s = s.toString();
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];   
  }
  return o;
}

function addLeadingZero(num,len) {
    while(len--) {
        num = '0' + num;
    }
    return num;
}

console.log(factorial(10));

// this does not gives infinity now :)
console.log(factorial(171));
