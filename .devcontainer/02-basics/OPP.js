// objects can be declared as object literals or constructor or singleton

// object literals
const jsuser={
    name: "asad",
    age:20,
    loction:"lahore",
    "fullname":"asad chadary"
    // [mysym]="key1"
}

// accessing age element from jsuser
console.log(jsuser.fullname);

// declare a symbol
// const mysym=Symbol("Key1")

// changing age in js user
jsuser.age=23
// console.log(jsuser.age)

// freeze dont allow to change value in a element
// Object.freeze(jsuser)
// jsuser.age=234
// console.log(jsuser.age)


// greetings
jsuser.greeting=function(){
    console.log("hello JS user")
}


// string interopolation
// jsuser.greetingtwo=function(){
//   console.log('hello JS user',this.name);
// }

// greeting is a function so round brackets are important
console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());