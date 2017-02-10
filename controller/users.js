const users = require('koa-router')();


users.get('/:id', function* (next) {
  this.log = yield function () {
    return { id: 3 } //做登录验证
  }()
  yield next
},
  function* (next) {
    if(parseInt(this.params.id) > 3){
      this.url = "users";
      this.data = {user:"SHenqi"}
    } else {
      this.url = "users2";
      this.data = {user:"SHenqiasdasd"}
    }
    
    yield next
   console.log(123123123)
  }
);

users.post('/node', function* (next) {
  this.log = yield function () {
    return { id: 3 } //做登录验证
  }()
  yield next
},
  function* (next) { 
  this.body = {
    code: 200,
    msg: "有arefool"
  }
  }
);

module.exports = users