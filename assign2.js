const myVal = process.argv;

let arr2 = [];

arr2.push(myVal[2]);

console.log(arr2);

arr2.push(Number(myVal[2]));

arr2.push(Number(myVal[3]));

let g = Number(myVal[2])+ Number(myVal[3]);

console.log(g);