//import type {IncomingMessage}

import type { IncomingMessage, ServerResponse } from "http";

export const routeHandeler=in(req:IncomingMessage, res:ServerResponse)=>{

const url=req.url;
const method=req.method;

if(url==="/" && method ==="GET"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end({JSON.stringify({message:"This is root route"})});

}else if(url?.stringwith("/products"){
    res.writeeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"This is roote"});

}else{
    res.writeHead(404,{"content-type":"application/json"});
    res.end(json.stringify({message:"Route not found"}))
}


}