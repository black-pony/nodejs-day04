var net = require("net");
var config = require("./config");

var client = net.createConnection(config.port,config.host);//连接服务器

//监听连接成功，触发事件
client.on('connect', function() {
  console.log('服务器建立连接成功了');
});

//这个事件用来监听服务器发送过来的消息，不管服务器给当前这个客户发送什么消息，就会打印出来
//一种消息是广播消息，一种是一对私聊
client.on('data', function(data){
    console.log(data.toString());
});

//聊天室的核心 用户可以和所有连接到当前这个服务器的用户进行广播，也可以和其中的某一个用户私聊
//区分广播和私聊在于消息的格式
//xxxxx --> 广播
//用户名@xxx --> 私聊
process.stdin.on("data",function(data){
    client.write(data);
});
