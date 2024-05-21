// arrays always in square brackets

const myArr=[0,1,2,3,4,5,]
console.log(myArr[1]);

// arrays creates shallow copies who shares same reference points while deep copies dont share the same properties

const singers=["atif","pitbull"]
const myarr2=[2,3,5,6,8]

// array Methods

// push or add  element to the array while pop removes the last element
// myArr.push(6)
// myArr.push(7)
// myArr.pop()


//  adds elemtn to start if the elment
// myArr.unshift(0)

//removes start elemtn 
// myArr.shif

// if elemetn is in array

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const newArr=myArr.join()
// join binds and conversts array to string


// slice and spice

console.log("A", myArr )

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr)



// console.log(myArr)

