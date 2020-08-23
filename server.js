var http=require('http'); //用来启服务
var fs=require('fs'); //用来读取文件


//开启服务
var server=http.createServer().listen(3000); //端口号
console.log('服务器开启成功');
