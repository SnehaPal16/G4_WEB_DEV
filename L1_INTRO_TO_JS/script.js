// console.log("HELLO WORLD");

// var a = 123;
// console.log(a);

// function abc(){
//     console.log("This is a function abc");
//     function hgf(){
//         console.log("This is a function hgf");
//     }
//     hgf();
// }

// abc();


// var  a = 200;
// console.log(a);
// xyz(); 
// var xyz=()=> {
//     console.log("This is a function xyz");
// }

// var b = 300;
// console.log(b);



// GRAND PARENT SCOPE
// let a = 10;
// let b = 20; 
// let c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); // undefined, because 'd' is not declared yet
// {
//     // PARENT SCOPE
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     {
//         // CHILD SCOPE
//         let d = 100000;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }


// function abc() {
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     function def() {
//         let d = 400;
//         function ghi() {
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }   
//         ghi();
//         console.log("End of def function");
//     }
//     def();
// }
// abc();


// 0 1 2 3 4 5
// for(var i = 0 ; i <= 5; i++) {
//     console.log(i);
// }


// 6 6 6 6 6 6
// for(var i = 0 ; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }


// CLOSURE -> 0 1 2 3 4 5
// This is a closure because the inner function has access to the outer function's scope.
// for(var i = 0 ; i <= 5; i++) {
//     (function clsr(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     })(i);  
    
// }


// HOF
// function xyz(cb){
//     console.log("first function xyz");
//     cb();
// }

// function cb() {
//     console.log("This is a cb function");
// }

// xyz(cb);

// A function that returns a function

function xyz() {
    console.log("This is xyz function");
    return function abc() {
        console.log("This is abc function");
    }
}
xyz()(); // This will call the inner function immediately
