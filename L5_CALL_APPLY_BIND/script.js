console.log("Script Start");
// let student1 = {
//     name : "Shivansh",
//     age : "20"
// }

// let student2 = {
//     name : "Sneha",
//     age : "20"
// }

// function welcomeStudent(welcomeMessage , goodByeMessage){
//     console.log(welcomeMessage+" "+this.name+" "+ "is "+this.age+" years old "+goodByeMessage);
// }

// let call = welcomeStudent.bind(student1 , "Good Morning" , "Bye");
// call();



// CURRYING IN JS---------------------------->

// function sumOfThree(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sumOfThree(10)(20)(30));


// EVENT CAPTURE AND BUBBLING----------------------------->

const grandparent = document.getElementById("grandparents");
const parent = document.getElementById("parent");   
const child = document.getElementById("child");

grandparent.addEventListener("click", function(event) {
    console.log("Grandparent clicked");
} , true); // true for capturing phase
parent.addEventListener("click", function(event) {
    console.log("Parent clicked");
} , true); // true for capturing phase
child.addEventListener("click", function(event) {
    console.log("Child clicked");
} , true); // true for capturing phase