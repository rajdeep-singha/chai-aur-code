const name ="hitesh"
const repoCount =50

//console.log(name + repoCount +" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const discordname= new String('rajdeep-fc')

console.log(discordname[0]);
console.log(discordname.length);

console.log(discordname.__proto__);


console.log(discordname.toUpperCase());

console.log(discordname.charAt(2));

const newstring = discordname.substring(0,4)// 4th letter is not printed here
console.log(newstring)

const anotherstring = discordname.slice(-8,4)// 4th letter is not printed here
console.log(anotherstring)

//TRIM
const newstringone = " rajdeep "
console.log(newstringone)
console.log(newstringone.trim())// there is trimstart and trimend
// REPLACE
const url ="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))// kuch puch bhi sakte hain

//SPLIT
console.log(discordname.split('-'))// strings ko alag karta hai






