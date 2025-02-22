// const tinderuser = new object()  // this is singelton
const tinderuser = {}// not singelton

tinderuser.id ="123abc"
tinderuser.name = "Rajdeep"
tinderuser.isLoggedIn = false


//console.log(tinderuser)


const regularuser={
    email:"rajdeepsingha384@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Rajdeep",
            lastname : "Singha"
        }
    }
}


//console.log(regularuser.fullname.userfullname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}

//const obj3 ={ obj1,obj2}
//const obj3 = object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}// most used
//console.log(obj3);


const users={
    id:1,
    email:"r@gmail.com"
}

const users1=[
    {
        
    },
{

},
{

},
{

},
{

}
]
users1

// console.log(object.keys(tinderuser));
//console.log(object.values(tinderuser));
//console.log(object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));// to know all function present in it



const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);


// FOR REACT
/* const navbar = ({company}) => {

}

navbar(company ="hitesh") */


// API

/* {
    name:"rajdeep",
    coursename:"js in hindi"
    "price": "free"
}
 */


[
    {},
    {},
    {},
]
