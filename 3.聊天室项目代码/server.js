var net = require("net");//加载tcp net模块
var server = net.createServer();//创建一个tcp服务器
var userArr = [];//用来存用户
//监听有没有客户端连接
server.on("connection",function(socket){//每个客户端连接上来，就像打电话一样的，就会建立一个连接，也就是我们的socket，就可以通过socket打电话,就和平时我们打电话一样，每个人建立的连接是唯一的
    //连接上来的客户端的ip，随机分配的
    var clientIp = socket.remoteAddress.replace(/^.*:/, '');
    //连接上来的客户端的端口号
    var clientPort = socket.remotePort;
    //把客户端的用户名和端口号组成当前用户，这个不可能重复的，就像身份证号一样，可以标识这个用户
    var clientName = clientIp + ":" + clientPort;
    for(var i=0;i<userArr.length;i++){
       userArr[i].socket.write("用户：" + clientName +"   上线了");//通知新用户上线
    }
    //把新连接的客户端用户存到数组当中
    var user = {
        clientName:clientName,
        socket:socket//socket存起来，和用户名是一一对应，这样，以后可以通过这个用户名可以和这个用户进行打电话
    };
    userArr.push(user);
    socket.on("data",function(data){
        data = data.toString().trim();
        if(data.indexOf("@") > -1){
            //说明是一对一聊天
            var arr = data.split("@");
            for(var i=0;i<userArr.length;i++){
                if(arr[0] === userArr[i].clientName){
                    // console.log(clientName + "要和" + arr[0] + "聊天");
                    userArr[i].socket.write("私聊：" + clientName + "对你说：" + arr[1]);
                }
            }
        }else{
            //说明是广播聊天（群聊）
            for(var i=0;i<userArr.length;i++){
                //把当前发消息排除，这个不重要
                if(clientName!=userArr[i].clientName){
                    userArr[i].socket.write("广播消息："+clientName + "说：" + data);
                }
            }
        }
    });
    socket.on("error",function(){
        for(var i=0;i<userArr.length;i++){
            if(userArr[i].clientName === clientName){
                userArr.splice(i,1);
            }else{
                userArr[i].socket.write("用户：" + clientName + "下线了");
            }
        }
    });
    socket.on("end",function(){
        console.log("有连接断开了")
    });
});

server.listen(8123,function(){
    console.log("tcp服务器创建成功，正在监听8123端口");
});