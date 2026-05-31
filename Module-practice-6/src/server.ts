// import { createServer, IncomingMessage, Server } from "http";

// const server : server = createServer((req:IncomingMessage , res)=>{
//     console.log(req)
// })

// server.listen(5000,()=>{
//     console.log("Server is running on the port 5000")
// });Bismillah

import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
console.log(req.method);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running...");
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});