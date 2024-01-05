// DATES

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

console.log(typeof(myDate));// object


let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString());


let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(myCreatedDate.getTime());

// new concept

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() +1);
console.log(newdate.getDay());


