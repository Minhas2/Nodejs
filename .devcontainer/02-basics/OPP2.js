// this is a singleton object
// const tinderuser=new Object()

// this is a non singleton object
const tinderuser={}
tinderuser.id="203"
tinderuser.name="asad"
tinderuser.isloggedin= false


// console.log(tinderuser);

const reg = {
    email: "@yahoo",
    fullname: {
        userfullname: {
            firstname: "ali",
            lastname: "ahsan"
        }
    }
};
        
console.log(reg.fullname)
// accessing class within a class
// console.log(reg.fullname.userfullname)

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

// stores object in object wrong way
// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)

// adding empty presthesis
// const obj3=Object.assign({},obj1,obj2)

// using epsilon to spread the object most latest way
const obj3={...obj1,...obj2}

// console.log(obj3)

const user = [
    {
        id: 1,
        email: "@gmail"
    },
    {
        id: 2,
        email: "@gmail"
    },
    {
        id: 3,
        email: "@gmail"
    }
];

// user[1].email
// console.log(tinderuser);

// tells elements in tinder user
// console.log(Object.Keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty(id));

const course={
    coursename:"js",
    price:"199",
    courseInsterctor:"Sir"
}

const{courseInsterctor}=course
console.log(courseInsterctor);

// {
//     "name": "ali",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {},

]