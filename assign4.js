const myVal= process.argv;

let arr4=[];

let myMealCost = arr4.push(Number(myVal[2]));

let myTipPercentage = arr4.push(Number(myVal[3]));

const tipAmount = (Number(myVal[3]) / 100) * Number(myVal[2])

const totalAmount = tipAmount + Number(myVal[2])

const result = `meal is $${Number(myVal[2])} + ${Number(myVal[3])}% tip = ${totalAmount}`

console.log(result);