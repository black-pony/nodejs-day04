var buf = new Buffer(3);
buf.write('a');//默认在第0位
buf.write('b',1);//第1位
buf.write('c',2);//第二位
console.log(buf.toString());