const https = require('https');
const fs = require('fs');
const setImmediate = require('timers').setImmediate;

console.log("Script Started");

// fs.readFile('./kuchBhi.txt', (err, data) => {
//     console.log("File read successfully:", data.toString());
// });

// setTimeout(() => {
//     console.log("first timeout");
// }, 0);

// process.nextTick(() => {
//     console.log("first nexttick");
// });

// https.get('https://jsonplaceholder.typicode.com/posts/1', (response) => {
//     console.log("HTTP GET request completed");
//     process.nextTick(() => {
//         console.log("Next tick after HTTP request");
//     });
// });

// setTimeout(() => {
//     console.log("second timeout");
// }, 0);

// setImmediate(() => {
//     console.log("first immediate");
// });

// process.nextTick(() => {
//     console.log("Second nexttick");
// });


// ---------------------------------------------------------------->
// var a = 20;
// console.log(a);

// fs.readFile('./kuchBhi.txt', (err, data) => {
//     console.log("File read successfully:");
// });

// setTimeout(() => {
//     console.log("setTimeout1");
// }, 0);

// Promise.resolve("Resolved").then(console.log("P1"));

// process.nextTick(() => {
//     console.log("nextTick1");
// });

// Promise.resolve("Resolved").then(console.log("P2"));

// https.get('https://jsonplaceholder.typicode.com/posts/1', (response) => {
//     console.log("HTTP GET request completed");
//     setImmediate(() => {
//         console.log("Immediate after HTTP request");
//     });
    
//     Promise.resolve("Resolved").then(console.log("P3"));

//     process.nextTick(() => {
//         console.log("nextTick2");
//     });
// }).on('error', (err) => {
//     console.error("HTTP request error:", err);
// });

// setTimeout(() => {
//     console.log("setTimeout2");
// }, 0);

// Promise.resolve("Resolved").then(console.log("P4"));


// Promise.resolve("Resolved").then(console.log("promise1"));
// process.nextTick(() => {
//     console.log("nextTick1");
// });

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log("Event start triggered");
});

eventEmitter.once('onceEvent', () => {
    console.log("Once event triggered");
});
eventEmitter.emit('start');
eventEmitter.emit('onceEvent'); 
// eventEmitter.removeListener('start');