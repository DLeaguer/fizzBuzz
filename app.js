/*Create a for loop that will iterate through 100 numbers starting from 1 and do the following:

if the number is a multiple of 3, it will console.log "fizz",
if the number is a multiple of 5, it will console.log "buzz",  
if the number is a multiple of 3 and 5, it will consol.log "fizzBuzz"
*/

console.log(' ');
console.log('    fizzBuzz 1 - 100: ');
console.log(' ');

for (var i = 1; i <= 100; i++) {
    var allNum = '';
    allNum += i;
    // console.log(allNum);
    if (i % 3 === 0 && i % 5 === 0){
    	allNum = allNum.replace(i, 'fizzBuzz');
    	// console.log(i);
    	console.log(allNum);
    }else
    if (i % 3 === 0){
    	allNum = allNum.replace(i, 'Fizz');
    	// console.log(i);
    	console.log(allNum);
    }else
    if (i % 5 === 0){
    	allNum = allNum.replace(i, 'Buzz');
    	// console.log(i);
    	console.log(allNum);
    }else 
    if (i % 3 !== 0 || i % 5 !== 0) {
    	allNum = allNum;
    	console.log(i);
    }
}

console.log(' ');
console.log('    fizzBuzz 100 - 1: ');
console.log(' ');

for (var i = 100; i >= 0; i--) {
    var allNum = '';
    allNum += i;
    // console.log(allNum);
    if (i % 3 === 0 && i % 5 === 0){
    	allNum = allNum.replace(i, 'fizzBuzz');
    	// console.log(i);
    	console.log(allNum);
    }else
    if (i % 3 === 0){
    	allNum = allNum.replace(i, 'Fizz');
    	// console.log(i);
    	console.log(allNum);
    }else
    if (i % 5 === 0){
    	allNum = allNum.replace(i, 'Buzz');
    	// console.log(i);
    	console.log(allNum);
    }else 
    if (i % 3 !== 0 || i % 5 !== 0) {
    	allNum = allNum;
    	console.log(i);
    }
}


	
	