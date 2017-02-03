//Node中提供了一个net模块，专门用来进行网络编程
var net = require("net");

//1. 创建一个网络服务器
var server = net.createServer();

// 2. 监听服务器的连接请求，设置请求处理回调函数,只要有客户端连接上来，就会触发connection事件，然后将当前连接的客户端相关的信息封装成一个socket对象

server.on("connection",function(socket){
    socket.write("hello");

    socket.on("data",function(data){
        console.log(data.toString());
    })
})

// 3. 开启服务器，分配一个端口号进行监听，设置一个启动成功之后的回调函数
server.listen(3000,"127.0.0.1",function(){
    console.log("server is running at port 3000...");
    console.log("please visit 127.0.0.1:3000");
});

//可以使用telnet来帮助我们测试当前这个服务器