/* 
    loop over from 0-100
    use conditionals to:
        check if number divisible by 3 (print Fizz)
        check if number divisible by 5 (print Buzz)
        check if number divisible by 3 AND 5 (print Fizz Buzz)
        if number is not divisible by any of these, print number only
*/


for (i =0; i <= 100; i ++) {
    console.log(i);
} if (i / 3) {
    console.log("Fizz");
} else if (i / 5) {
    console.log("Buzz");
} else if (i / 3 && i / 5) {
    console.log("Fizz Buzz");
} else {
    console.log(i);
}



 //~~ This is my code...
console.log("------------------")

for (let i = 0; i <= 100; i++) {
   if (i % 3 == 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


/* ~~ This was copied from Paul's notes
for (let i = 0; i <= 100; i++) {
	if (i % 15 === 0) {                // combined 3 && 5 to the first multiple divisible by both
		console.log("Fizz Buzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}
*/

