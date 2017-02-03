var fs = require('fs')

var args = process.argv.slice(2)

var src = args[0]
var dist = args[1]

// 1. 创建可读流和可写流
var rs = fs.createReadStream(src)
var ws = fs.createWriteStream(dist)

// 得到文件总字节大小
var totalSize = fs.statSync(src).size
var curSize = 0

// 2. 监听可读流对象 data 事件，然后在 data 事件的处理函数中，将数据写入可写流中
rs.on('data', function(chunk) {
  curSize += chunk.length
  ws.write(chunk)
  console.log('已完成：' + (curSize / totalSize * 100).toFixed(2) + '%')
})

rs.on('end', function() {
  console.log('copy success')
  // 记住不要忘记把可写流关闭
  ws.end()
})
