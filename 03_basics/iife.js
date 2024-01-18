// Immediately Invoked Function Expression(IIFE)

(function chai(){
    // NAMED IIFE
    console.log(`DB CONNECTED`); // GLOBALSCOPE KE POLLUTION SE PROBLEM HOTI HAI KYI BAAR USE BACHNE KE LIYE IIFE USE HOTA HAI
})(); // SEMICOLON IS IMP HERE


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rajdeep');