// singleton
//object.literals



// object literals 

const mysym = Symbol("Key1")





const JsUser = {
    name : "Rajdeep",
    fullname :"Rajdeep Singha",
    [mysym]:"my key1",// symbol represents object, toh square brackets rakne se sirf obj hoga nehi toh string ki tarha kaam karega
    age:18,
    location:"West Bengal",
    email:"rajdeepsingha384@gmail.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])// array mein "" lagana zaruri hota hain value ko access karne ke liye
console.log(JsUser["fullname"])
console.log(JsUser[mysym])
console.log(typeof[mysym])// object


JsUser.email = "rajdeep@chatgpt.com"// to change some values of some function
//Object.freeze(JsUser)
JsUser.email = "rajdeep@microsoft.com"
console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js User")
}


console.log(JsUser.greetings());// Hello Js User
