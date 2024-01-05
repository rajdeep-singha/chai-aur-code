const score =400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)// string banake length check kar liya
console.log(balance.toFixed(1));// 1 point decimal

const othernumber =23.8974

console.log(othernumber.toPrecision(2));// it will precise the value upto that number count

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN')); // It will help to count number based on any number system of the world

// +++++++++++MATHS+++++++++++

console.log(Math);
console.log(Math.abs(-4));// negtive to positive
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.max(4,8,9,10));


console.log(Math.random());

console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1))+min)// most imp concept

