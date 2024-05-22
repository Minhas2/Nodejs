
// curlu brackets is a scope when used with if else or loops
// {}
let a=300
if (true){
    let a=10
   const b=20
//    var c=30
    console.log("Inner",a)

}



// globle scope value is avaible every where var is not used in local scope because value gets accessed 

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="ali"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    // two()
}


// one()


if (true){
    const username="ali"
    if (username==="ali"){
        const website="youtube"
        console.log(username+website)

    }
    // console.log(website);

}


// ======================================INTERSTING======================================
addone(5)

function addone(num){
    return num+1
}

// addtwo wont run when used before declartion of function is variable
addTwo(5)

const addTwo=function addone(num){
    return num+2
}





// console.log(username)