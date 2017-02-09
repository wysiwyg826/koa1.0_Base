const http = require('http');
const logger = require('koa-logger');
const koa = require('koa');
const app = koa();
const KeyGrip = require('keygrip');

// app.keys = "hahah"

// 中间件 x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + "ms");
});

// 中间件 logger

app.use(logger());
// app.keys = "asda"
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

app.use(function *(){
  // this.cookies.set('name', 'tobi', {signed: true})
  this.body = 'hello world';
  console.log(this.request)
})

// app.listen(3000);

app.on('error', function(err){
  console.error('server error', err);
});

http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);