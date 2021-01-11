const http = require("http");

console.log("adsfd")
//raw한 http 서버를 만듬, 웹 소켓으로 전달할 tcp를 만드는데 사용
const httpserver = http.createServer((req, res) => {

    console.log("we have received a request");
    res.statusCode = 200
    res.end("hello")
})
 
httpserver.listen( 8080, "0.0.0.0", () => console.log("My server is listening on port 8080"))

 
