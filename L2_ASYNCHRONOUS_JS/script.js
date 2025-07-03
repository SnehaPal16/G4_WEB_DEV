console.log("script start");

// setTimeout(() => {
//   console.log("I am going to restraunt");
// }, 4000);

// setTimeout(()=>{
//     console.log("I am checking the menu for odering")
// }, 3000);


// function walkInRestraunt(cb){
//     console.log("I am walking in the restraunt");
//     setTimeout(cb , 2000);
// }

// function menuCheck(cb){
//     console.log("I am checking the menu for odering");
//     setTimeout(cb , 4000);
// }

// function foodOrder(cb){
//     console.log("I am ordering food");
//     setTimeout(cb , 6000);
// }

// function havingFood(cb){
//     console.log("I am having food");
//     setTimeout(cb , 8000);
// }

// function payingBill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb , 3000);
// }

// function walkAway(){
//     console.log("I am walking away from the restaurant");
// }

// walkInRestraunt(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingFood(()=>{
//                 payingBill(()=>{
//                     walkAway();
//                 })
//             })
//         })
//     })
// })


// let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array(arr.length);
// function doubleArrVal(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         arr2[i] = arr[i] * 2;
//     }
//     return arr2;    
// }

// doubleArrVal(arr);
// console.log(arr2)

// USING MAP

// let arr = [1, 2, 3, 4, 5];
// let arr2;
// function doubleArrVal(arr){
//     arr2 = arr.map((val)=>{ return val * 2; })
// }

// doubleArrVal(arr);
// console.log(arr2);

// Array.prototype.doubleArrVal = function(data){
//     let output = []
//     for(var i=0 ; i<data.length ; i++){
//         output.push(data[i] * 2);
//     }
//     return output;
// }
// let arr = [1, 2, 3, 4, 5];
// arr.doubleArrVal(()=>{

// })
