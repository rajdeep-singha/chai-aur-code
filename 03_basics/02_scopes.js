//var c = 300
let a =300
if (true) {// curly braces hi scope hain
    let a = 10
    const b =20
    //var c =30// that's why it is avoided
    console.log("INNER: ",a);
}


//console.log(a);
//console.log(b);
//console.log(c);


//NESTED SCOPE

function one(){
    const username = "rajdeep"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   //console.log(website);//ReferenceError: website is not defined

    two()
}

one()

if(true){
    const username ="rajdeep"
    if(username==="rajdeep"){
        const website =" youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//+++++++++++++++++ intresting ++++++++++++
console.log(addone(5))
function addone(num){
  return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}


