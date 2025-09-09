console.log("routing node js")
import http from 'http'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    // res.end("<h1>your request is accepted</h1>")

    if(req.url === "/wdm"){
        res.end("welcome to web dev")
    }
    else if(req.url === "/"){
        res.end("this is home page")
    }
    else {
        res.end("page not found")
    }
})

const port = 3000;

server.listen(port,()=>{
    console.log("server is runnning on port 3000")
})