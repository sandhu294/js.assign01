const myVal = process.argv;

let arr3 = [];

arr3.push(Number(myVal[2]));

arr3.push(Number(myVal[3]));

console.log(arr3);

let g = Number(myVal[2]) + Number(myVal[3]);

if(g<10)

    { 
        console.log("values are less than 10");
    }
    
     else if(g>10 && g<100)
    {
        console.log("values are greater than 10 but less than 100");
    }
    else if(g>100 && g<1000)
    {
        console.log("values are greater than 100 and less than 1000")
    }
    else
    {
        console.log("values are greater than 1000")
    }