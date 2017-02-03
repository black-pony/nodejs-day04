var fs = require('fs')

var args = process.argv.slice(2)

// var src = 'C:/Users/itcast/Desktop/tian.mkv'
var src = args[0]

// 1. 根据指定的文件创建一个可读流，得到一个可读流对象
var readStream = fs.createReadStream(src)

var totalSize = fs.statSync(src).size
var curSize = 0

// 2. 流对象有一个 data 事件，流对象会自动的帮我们去读取文件中的数据
// 一点儿一点儿读，只要读到了一点儿数据，然后触发 data 事件，将该数据传递给 data 事件的回调处理函数
readStream.on('data', function(chunk) {
  // 计算当前读取到的文件的大小，计算读取的进度
  // chunk 是一个 Buffer 对象
  // 每一次读取到了一点儿数据，将该数据的长度累加起来 / 文件的总大小 * 100 得到百分比
  curSize += chunk.length
  // 将已经读取到的字节数 / 总字节数大小 * 100  = 已读取的百分比
  console.log((curSize / totalSize * 100).toFixed(2) + '%')
})

readStream.on('end', function() {
  console.log('读取结束')
})
