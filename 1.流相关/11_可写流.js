var fs = require('fs')

var dist = 'C:/Users/itcast/Desktop/aa.txt'

// 1. 根据指定的文件创建一个可写流，得到一个可写流对象
var writeStream = fs.createWriteStream(dist)

// 2. 可以通过可写流对象的 write 方法想改流中写数据
writeStream.write('h')
writeStream.write('e')
writeStream.write('l')
writeStream.write('l')
writeStream.write('o')
writeStream.write('world')

// 3. 写入完毕之后，一定要把可写流关闭掉
//打完电话一定要挂掉电话
writeStream.end()
