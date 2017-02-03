var net = require("net");
var server = net.createServer();
server.on("connection",function(socket){
    console.log(socket.remoteAddress);//replace(/^.*:/, '')
    console.log(socket.remotePort);
    socket.write("hello");
    socket.on("data",function(data){
        console.log("客户端说："+data.toString());
    });
});

server.listen(3000,function(){
    console.log("服务器正在监听端口3000");
});