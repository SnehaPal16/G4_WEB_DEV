const https = require('https');
const fs = require('fs');
const setImmediate = require('timers').setImmediate;

console.log("Script Started");

fs.readFile('./kuchBhi.txt', (err, data) => {
    console.log("File read successfully:", data.toString());
});

setTimeout(() => {
    console.log("first timeout");
}, 0);

process.nextTick(() => {
    console.log("first nexttick");
});

https.get('https://jsonplaceholder.typicode.com/posts/1', (response) => {
    console.log("HTTP GET request completed");
    process.nextTick(() => {
        console.log("Next tick after HTTP request");
    });
});

setTimeout(() => {
    console.log("second timeout");
}, 0);

setImmediate(() => {
    console.log("first immediate");
});

process.nextTick(() => {
    console.log("Second nexttick");
});