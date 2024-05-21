// Dates

let mydate= new Date() 
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate);
// date is a object 

let myCreateDate= new Date(2023,0,23)
// console.log(myCreateDate);
// console.log(myCreateDate.toString())


let mytimestamps = Date.now()
console.log(mytimestamps);
console.log(myCreateDate.getTime());
// get time gives exact time from the desginated date



let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate);