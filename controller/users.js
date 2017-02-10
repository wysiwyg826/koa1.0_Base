const users = require('koa-router')();
users.get('/:id', function* (next) {
  this.log = yield function () {
    return { id: 3 } //做登录验证
  }()
  yield next
},
  function* (next) {
    this.body = this.log
  }
);

module.exports = users