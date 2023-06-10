//print stars for given input
function printStar(n){
  let pattern = ''
  for(let i= 0; i<n; i++){
    pattern+= '*'
  }
  console.log(pattern)
}

// print left pyramid

function leftPyramid(n) {
 for (let i = 1; i <= n; i++) {
   printStar(i);
 }
  
}

const result = leftPyramid(5);
console.log(result);



const res = printStar(4);
console.log(res);

const res2 = printStar(3);
console.log(res2);


// Sum all the numbers for a given range
function rangeSum(start,end){
  let sum = 0;
  for(let i=start; i<end; i++){
      sum+=i;
  }
  return sum;
}
const rangeSumRes = rangeSum(1,10);
console.log(rangeSumRes);


function fibonacci(n) {
  let fibonacciSeries = [0, 1]; 

  // Generate the Fibonacci series
  for (let i = 2; i < n; i++) {
    let nextNum = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNum);
  }

  for (let number of fibonacciSeries) {
    console.log(number);
  }
}

fibonacci(10);


// print actual pyramid
function printPyramid(n){

  for (let i = 1; i <= n; i++) {
    let pattern = '';

    // Adding spaces before each row to get the desired pyramid shape
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }

    // Adding stars for the current row
    for (let k = 1; k <= i; k++) {
      pattern += '* ';
    }

    console.log(pattern);
  }
  
}

const pyramidRes = printPyramid(5);
console.log(pyramidRes);


