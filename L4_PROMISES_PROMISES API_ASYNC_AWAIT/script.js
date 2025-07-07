// let userData = [
//     {
//         name : "Sneha",
//         age : 20
//     },
//     {
//         name : "Shivansh",
//         age : 20
//     },
//     {
//         name : "Shubham Goyal",
//         age : 22
//     },
//     {
//         name : "Shivu",
//         age : 19
//     },
//     {
//         name : "Sujal",
//         age : 21
//     },
//     {
//         name : "Shubham Guglani",
//         age : 20
//     }

// ]


// let output = userData.filter((user)=>{
//     if(user.age > 20){
//         return user.name
//     }
// })

// console.log(output)



// PROMISE

// const myPromise = new Promise((resolve , reject)=>{
//     resolve("I GOT PLACED");
// })

// console.log(myPromise);


// const promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("I Got Placed")
//     }, 5000);
// })
// promise.then((res) => {
//     console.log(res);
// }).then(() => {
//     console.log(
//         "Party Time"
//     )
// }).then(() => {
//     console.log(
//         "Working Working Working"
//     )
// }).then(() => {
//     console.log(
//         "LayOff"
//     )
// })

// const promise2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         reject("I Did Not Got Placed")
//     }, 5000);
// })
// promise2.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("Error Found : " ,err);
// })



//   'Promise 1 resolved',
//   'Promise 2 resolved',
//   'Promise 3 resolved',
//   'Promise 4 resolved'


// let p1 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 1 resolved");
//     })
// });

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 2 resolved");
//     })
// });

// let p3 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 3 resolved");
//     })
// });

// let p4 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 4 resolved");
//     })
// });

// Promise.all([p1 , p2 , p3 , p4]).then((res) => console.log(res)).catch((err)=> console.log("Error" , err));



// let p1 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 1 resolved");
//     })
// });

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 2 resolved");
//     })
// });

// let p3 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 3 resolved");
//     })
// });

// let p4 = new Promise((resolve , reject) => {
//     setTimeout(()=> {
//         resolve("Promise 4 resolved");
//     })
// });

// Promise.all([p1 , p2 , p3 , p4]).then((res) => console.log(res)).catch((err)=> console.log("Error" , err));


async function fetchProducts() {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json()
    console.log(data);

    const list = document.getElementById("list");
    
    data.products.forEach(p => {
        const li = document.createElement("li");
        li.innerText = `Title : ${p.title} \n Description :${p.description} \n Price: $${p.price}`;
        list.appendChild(li);
    });
    //HW -> create new array of objects which consists of [title , desc , price]
}

fetchProducts();


