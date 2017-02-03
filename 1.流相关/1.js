var fs = require('fs');
var writeStream = fs.createWriteStream('./a.js');
console.log(writeStream instanceof Buffer);
writeStream.write('aa');
writeStream.write('aa');
writeStream.write('aa');
writeStream.write('aa');
writeStream.write('aa');
writeStream.write('aa');
writeStream.end();
//注意 writeStream如果调用了end之后，再进行操作会出错，除非重新打开
var readStream = fs.createReadStream('./index.js');
readStream.pipe(writeStream);
