// FILTER

// const words = ["Sneha" , "Shivansh" , "Shubham" , "Sujal" , "Shivu"];
// const result = words.filter((word) => word.length > 5);
// console.log(result)


// PROTOTYPE

// Array.prototype.filterReplica = function(condition){
//     let output = [];
//     for(var i=0 ; i<this.length ; i++){
//         if(condition) output.push(i);
//     }
//     return output;
// }

// Array.prototype.filterReplica = function(logic){
//     let output = [];
//     for(var i=0 ; i<this.length ; i++){
//         if (logic(this[i])){
//             output.push(this[i])
//         }
//     }
//     return output;
// }

// const filteredData = words.filterReplica((x)=> x.length>5);
// console.log(filteredData)


// REDUCE

let arr = [0 , 1 , 2 , 3 , 4 , 5]
// let sum = arr.reduce(function (acc , curr){
//     acc = acc+ curr;
//     return acc;
// },0);

// console.log(sum); 

// PROTOTYPE

Array.prototype.reduceReplica = function(logic , initial){
    let res = initial;
    for(var i=0 ; i<this.length ; i++){
        res = logic(res,this[i])
    }
    return res;
}

const res = arr.reduceReplica(function(acc , curr){
    return acc += curr;
},0);
console.log(res)

