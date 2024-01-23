/* const userEmail = "r@jdeep.ai"

if(userEmail){
    console.log("got user email");
} else{
    console.log("Don't have user email");// got user email
} */

/* const userEmail = ""

if(userEmail){
    console.log("got user email");
} else{
    console.log("Don't have user email");// don't have user email
} */

const userEmail = []

if(userEmail){
    console.log("got user email");
} else{
    console.log("Don't have user email");// got user email
}

//FALSY VALUE
//false,0,-0,BigInt 0n, "",null , undefined,NaN

//TRUTHY VALUES
// "0",'false',"",[],{}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
 console.log("object is empty");
}

//console.log(typeof(emptyObj));


// Nullish Coalescing operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10  = 10
//val1 = undefined ?? 15   = 15
//val1 = undefined ?? null = null

console.log(val1);

// TERNIARY OPERATOR

// condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")
