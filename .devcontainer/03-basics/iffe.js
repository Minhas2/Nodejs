// immedite invoked function

(function chai(){
    // named iffe
    console.log("DB connected");
})();

// this is immedeiate invoked function
// ()()
// chai()

( (name) => {
    console.log(`DBtwo connected ${name}`);
})(`don`)