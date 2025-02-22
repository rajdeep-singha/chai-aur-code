//fetch('https://somthing.com').then().catch().finally()
const promiseOne = new Promise(function(resolve,reject){
    //DO an async task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // for promise consumed 
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})
//
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
        console.log("Async 2 resolved");
})
//
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email: "rs1686@srmist.edu.in"})
    },1000)
})

promiseThree.then(function(user){
 console.log(user);
})



// forth promise
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"rajdeep", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

const username =promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> 
console.log("The promise is either resolve or rejected"))


// promisefive
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript" , password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch ('https://randomuser.me/api/')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
//getAllUsers()



fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


