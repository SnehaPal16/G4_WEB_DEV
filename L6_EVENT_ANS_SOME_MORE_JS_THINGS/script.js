// EVENT CAPTURING AND BUBBLING

const grandparent = document.getElementById("grandparents")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// this will give the output in the console of the venet bublling like when clicked on the child it will first log the grandparent then parent then child
// grandparent.addEventListener("click" , ()=>{
//     console.log("this is red block");
// })


// parent.addEventListener("click" , ()=>{
//     console.log("this is blue block");
// })


// child.addEventListener("click" , ()=>{
//     console.log("this is green block");
// })

// if you want to stop event bubbling then use -> stopPropogation() method
// grandparent.addEventListener("click" , (e)=>{
//     console.log("this is red block");
//     e.stopPropagation()
// })


// parent.addEventListener("click" , (e)=>{
//     console.log("this is blue block");
//     e.stopPropagation();
// })


// child.addEventListener("click" , (e)=>{
//     console.log("this is green block");
//     e.stopPropagation();
// })



// const productList = document.getElementById("productList");

// productList.addEventListener("click" , (event)=>{
//     if(event.target.tagName === "LI"){
//         console.log("CLICKED ON : " , event.target.textContent)
//     }
// })


// const newElement = document.createElement("li");
// newElement.textContent = "New Item";
// productList.appendChild(newElement);

// const textBox = document.getElementById("textBox");
// let thisTimeOut;
// textBox.addEventListener("input" , (e)=>{
//     clearTimeout(thisTimeOut);
//      thisTimeOut = setTimeout(() => {
//         console.log("Typed : " , e.target.value);
//     }, 2000);

// })

// Debouncing is a technique used to limit the rate at which a function can fire. It ensures that a function is not called too frequently, which can be useful in scenarios like handling user input or API calls.
// In this example, the input event listener is set up to log the value of the text

// const textBox = document.getElementById("textBox");

// function searchFunction(){
//     let thisTimeOut;
//     return function(e) {
//         clearTimeout(thisTimeOut);
//         thisTimeOut = setTimeout(() => {
//             console.log("Typed : ", e.target.value);
//         }, 2000);
//     }
// }

// textBox.addEventListener("input", searchFunction());