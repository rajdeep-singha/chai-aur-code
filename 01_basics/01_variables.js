const accountId = 144553 // can't be changed
let accountEmail ="rajdeepsingha@gmail.com"
var accountpassword= "12345"// can be changed
accountCity ="West Bengal"
let accountState;// it will be undefined as no value is assigned
//accountID =2
accountpassword="23456"
console.log(accountId);
console.log(accountpassword);

/*
preffer not to use var
because of issue in block scope and function scope
*/
console.table([accountId, accountEmail,accountpassword,accountState])