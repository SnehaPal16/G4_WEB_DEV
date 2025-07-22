const http = require('http');
const url = require('url');

const blogPost = {
    title: "Node.js HTTP Module",
    content: "This is a blog post about the Node.js HTTP module.",
    author: "John Doe"
};



// const server = http.createServer((req, res) => {
//     if(req.method == "GET" && req.url == '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Data Fetched Respinse Send');
//     }
//     else if(req.method == "GET" && req.url == '/blog'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(blogPost));
//     }
//     else if(req.method == "POST" && req.url == '/blog'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(blogPost));
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end("NOT FOUND");
//     }
// })



// const server = http.createServer((req, res) => {
//     if(req.method == "GET" && req.url == '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Data Fetched Respinse Send');
//     }
//     else if(req.method == "GET" && req.url == '/blog'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(blogPost));
//     }
//     else if(req.method == "POST" && req.url == '/blog'){
//         let blog = '';
//         req.on('data', chunk => {
//             blog += chunk.toString();
//         });
//         try{
//             req.on('end', () => {
//                 const newBlogPost = JSON.parse(blog);
//                 res.writeHead(200, {'Content-Type': 'application/json'});
//                 res.end(JSON.stringify(newBlogPost));
//             });
//         } catch (error) {
//             res.writeHead(400, {'Content-Type': 'text/plain'});
//             res.end("Invalid JSON");
//         }
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end("NOT FOUND");
//     }
// })

const server = http.createServer((req, res) => {
    if(req.method == "GET" && req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Data Fetched Respinse Send');
    }
    else if(req.method == "GET" && req.url == '/blog'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(blogPost));
    }
    else if(req.method == "POST" && req.url == '/blog'){
        let blog = '';
        req.on('data', chunk => {
            blog += chunk.toString();
        });
        try{
            req.on('end', () => {
                const newBlogPost = JSON.parse(blog);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(newBlogPost));
            });
        } catch (error) {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end("Invalid JSON");
        }
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("NOT FOUND");
    }
})