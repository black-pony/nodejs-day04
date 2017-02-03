var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  var myStream = fs.createReadStream('./1.mkv');
  myStream.pipe(res);
}).listen(3000);