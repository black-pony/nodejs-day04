var buf1 = new Buffer(12);//长度为12的一个buffer,开辟了12个字节的空间，打印出来里面填充的值默认里面是随机的
console.log(buf1);//十六进制数据
console.log(buf1.length);
buf1.fill(1);//可以全部用1来填充
console.log(buf1);
buf1.fill(0);//清空了buffer
console.log("wf",buf1);

var buf2 = new Buffer("传智播客");//默认是utf-8格式的 一个汉字占三个字节
console.log(buf2);
console.log(buf2.toString());//toString就是转成utf-8格式