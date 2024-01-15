
function saymyname(){
console.log("R");
console.log("A");
console.log("J");
console.log("D");
console.log("E");
console.log("E");
console.log("P");
}

//saymyname()

/* function addtwonumbers(number1,number2){
  console.log(number1 + number2);
} */
function addtwonumbers(number1,number2){
  
    /* let result = number1 + number2
    return result */
    return number1 + number2

}

const result = addtwonumbers(3,5)

//console.log("Result: ", result);



function loginusermessage(username){
    if(username=== undefined){
console.log("please enter a username");
return
    }
    return `${username} just logged in`
}

//console.log(loginusermessage("rajdeep"))
//console.log(loginusermessage())



function calculatecartprice(...num1){   // ...> rest operator/spread operator
return num1
}
console.log(calculatecartprice(200,400,500))

const user = {
    username: "Rajdeep",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)

//
const mynewarray =[200,400,100,600]

function returnsecoundvalue(getarray){
    return getarray[1]
}
//console.log(returnsecoundvalue(mynewarray));
console.log(returnsecoundvalue([200,400,500,1000]));
