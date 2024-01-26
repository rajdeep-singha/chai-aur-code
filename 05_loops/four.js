const myObject ={
    js:'javascript',
    cpp:'C++',
    rb:"ruby"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["JS","RB","PY","JAVA","CPP"]
for(const key in programming){
    console.log(`${key} order for this is ${programming[key]}`);
}


/* const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
for (const key in map) {
    console.log(key);
} */
