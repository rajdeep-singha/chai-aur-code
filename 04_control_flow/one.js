// if

/* if(condition){  // condition apply hogi
    
} */

//const isuserloggedin = true

/* if(2 == "2"){
console.log("executed");
} */

//<,>,<=,>=,==,!=,===,!==


/* const score = 200
if(score>100){
    const power ="fly"
    console.log(`User power:${power}`);
} */


/* const balance = 1000
if(balance>500) console.log("test"); */ // aise nehi karna


/* if(balance<500){
console.log("less than 500");
}   */


const userloggedin =true
const debitcard  =true
const userloggedinfromgoogle =true
const userloggedinfromemail =true

if (userloggedin && debitcard && 2==3){
    console.log("Allow to buy courses");
}

if(userloggedinfromgoogle || userloggedinfromemail){
 console.log("user logged in");
}
