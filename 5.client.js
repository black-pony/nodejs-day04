var net = require("net");
var client = net.createConnection(3000,"127.0.0.1");
client.on("connect",function(){
    console.log("与服务器成功建立连接");
});
client.on("data",function(data){
    console.log("服务器返回的消息",data.toString());
    if(data.toString() === "hello"){
        client.write("world");
    }
});