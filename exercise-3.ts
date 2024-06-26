function getSum(first: number, second: number){
    return first + second;
}
console.log(getSum(10, 11));
console.log(getSum(13,31));
console.log(getSum(10.44, 115.11));
 

function getFixedNumber(): number {
    return 42;
}

let result: number = getFixedNumber();
console.log(result);