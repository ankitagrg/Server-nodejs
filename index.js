import http from "http";


const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url == "/home"){
        res.end("this is home");
    } else{
        res.end("other page");
    }
    console.log("Incomming request");
    res.end("Hello World!");
   
    // console.log(url,method);
    //  console.log(req);
});
const PORT = 3000;
server.listen(PORT,() =>{
        console.log(`server running at http://localhost:${PORT}/n`);
    });