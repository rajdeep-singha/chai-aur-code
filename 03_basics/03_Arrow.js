const user ={
    username:"hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

/* user.welcomemessage()

user.username="ram"
user.welcomemessage()

console.log(this); */

/* function chai(){
    let username ="rajdeep"
    console.log(this);

}
chai() */


/* const chai = function(){
    let username ="rajdeep"
    console.log(this.username)
}
chai() */


const chai = () => {
    let username ="rajdeep"
    console.log(this);
}
// chai()

// ()=> {}  ARROW FUNCTION
/* const addtwo = (num1,num2) => {   // curly braces rahega toh return use karna hain
           return num1+num2
}
console.log(addtwo(3,4)) */


// IMPLICIT RETURN
/* const addtwo = (num1,num2) =>   num1+num2

console.log(addtwo(3,4))
 */

const addtwo = (num1,num2) =>   ({username:"rajdeep"})
console.log(addtwo())


const myarray =[2,5,3,7,8]

//myarray.forEach()





