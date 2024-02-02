const myNums = [1,2,3]

/* const mytotal= myNums.reduce(function(acc,currval){
    console.log(`acc:${acc}and currval:${currval}`);
  return acc + currval
},0)
console.log(mytotal); */

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)// arrow function
console.log(myTotal);


const shoppingcart =[
    {
        itemname : "js course",
        price: 5999
    },
    {
        itemname : "html course",
        price: 500
    },
    {
        itemname : "css course",
        price: 1000
    },
    {
        itemname : "C++ course",
        price: 2000
    },
    {
        itemname : "pyhton course",
        price: 3000
    },
]

const pricetopay =shoppingcart.reduce((acc,item) => acc+item.price,0)

console.log(pricetopay);