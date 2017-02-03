var fs = require('fs')

var src = 'C:/Users/itcast/Desktop/a.exe'
var dist = 'C:/Users/itcast/Desktop/b.exe'

var rs = fs.createReadStream(src)
var ws = fs.createWriteStream(dist)

// 可读流有一个方法叫做 pipe，pipe 方法的参数就是 可写流对象

// pipe 方法把自己监听 data 事件来处理要高效很多
// gulp 是一个前端自动化构建工具：文件合并、文件压缩、图片压缩
// gulp 就是利用 node 里面流的威力，所以这个构建工具的性能很高
rs.pipe(ws)

rs.on('end', function () {
  console.log('文件拷贝成功')
})

// fs.createReadStream(src).pipe(fs.createWriteStream(dist))
