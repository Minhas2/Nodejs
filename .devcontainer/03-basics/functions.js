

function saymyname(){
    console.log("a");
    console.log("h");
    console.log("b");
}

saymyname()

function add(num1,num2){
    console.log(num1 + num2)
}

function sub(num1,num2){
    console.log(num1-num2)
}

function mul(num1,num2){
    console.log(num1*num2)
}

function div(num1,num2){
    console.log(num1/num2)
}

// add(1,2)
// sub(1,2)
// mul(1,2)
// div(1,2)

function add(num1,num2){
    // result=(num1 + num2);
    // return result
    return num1+num2
}

// add(1,2)
// console.log("result :",result)


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("ali"))

// function addcartprice(price){
//     return price
// }

// console.log(addcartprice(100))

// adding multiple items to card using restopretor... or spread ...
// using val1 stores the first value in val 1 then shows all the remaining prices
function addcartprice(val1,...price){
    return price
}

console.log(addcartprice(100,200,300))

const user = {
    name: "ali",
    price: 10
};

function handleobjectuser(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleobjectuser(user)


const myNewarr=[200,100,300]

// this function get the
function getsecondnum(getarray){
    return console.log(myNewarr[1])
}

getsecondnum(myNewarr)