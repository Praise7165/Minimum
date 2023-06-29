// EXERCISE 1
// Write a function min that takes two arguments and returns the minimum.

/*
function min(a, b) {
    if (a < b) return a;
    else return b;
};
*/


function min(...numbers) {
    let leastNum = 1;

    for (let i= 0; i < numbers.length; i++) {
        if (numbers[i] < leastNum) leastNum = numbers[i];
    }
    return leastNum;
}


console.log(min(1, 2));
console.log(min(1, 0));
console.log(min(0, 1, -1, 1, 0));
console.log(min(1, -2));
console.log(min(1, -2, -8));
console.log(min(1, -2, -8, 200, 0, -20));
console.log(min(-2, -8, 200));