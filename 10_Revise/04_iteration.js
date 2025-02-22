let salesData = [
{product: "Laptop", price: 1200 } ,
{product :"Smartphone", price: 800 } ,
{product:"Headphones" , price: 150 } ,
{product:"Keyboard", price: 80 } ,
] ;

let innitialValue = 0;
let totalSales = salesData.reduce((acc,sale)=>acc+sale.price,0)
console.log(totalSales);
