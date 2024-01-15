//var c = 300
let a =300
if (true) {
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
   // console.log(website);

    two()
}

one()