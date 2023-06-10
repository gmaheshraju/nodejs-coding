function printStar(n){
  let pattern = ''
  for(let i= 0; i<n; i++){
    pattern+= '*'
  }
  console.log(pattern)
}

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


function printPyramid(n){

  for (let i = 1; i <= n; i++) {
    let pattern = '';

    // Adding spaces before each row to create the pyramid shape
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }

    // Adding asterisks for the current row
    for (let k = 1; k <= i; k++) {
      pattern += '* ';
    }

    console.log(pattern);
  }
  
}

const pyramidRes = printPyramid(5);
console.log(pyramidRes);