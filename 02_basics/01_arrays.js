// ARRAY

const myArr= [1,1,2,3,4,5]// shallow - same refernce point , so jo change karunga original array mein bhi chance hoga
// deep - don't share the same reference point and will not change the original array
const myHeros =["Batman", "Iron Man"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(9)

console.log(myArr)
