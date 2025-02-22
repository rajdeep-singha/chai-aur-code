// function prepareChai(type){
//     if(type === 'ginger chai'){
//       console.log('Adding spices to chai');
//     } else {
//         return 'normal chai';
//     }
// }


// prepareChai('ginger chai');



function calculateTotal(amount){
  // convert to number 
  amount = Number(amount);
  if(amount>1000){
    return  amount * 0.9;
   
   
  } return amount;
}

let finalBill = calculateTotal(1200);
console.log(finalBill);
// console.log(calculateTotal(800));




function trafficLight(color){
  if(color === 'red'){
    return 'stop';
  } else if(color === 'yellow'){
    return 'slow down';
  } else if(color === 'green'){
    return 'go';
  } else {
    // return 'proceed with caution';
    console.log('This is the default message');
  }
}

trafficLight('red');




function checktruthyValue(va1ue) {
  if (value) {
  console.log ("Truthy" ) ;
  console.log ("Falsy");
  checktruthyValue(1)
  checktruthyValue(0)
  checktruthyValue( "hitesh" )
  checktruthyValue( "" )
  // checktruthyllalueßl
  }}




function login(username, password){
  if(username === 'admin' && password === '1234'){
    return 'Login successful';
  } else {
    console.log( 'Login failed');
  }
}