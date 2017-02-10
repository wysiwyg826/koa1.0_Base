const router = require('koa-router')();
// require('./../controller/users')
const users = require('./../controller/users')
router.use('/users', users.routes(), users.allowedMethods());
router.get('/', function* (next) {
  this.body = "Hello World"
});



// console.log("this is router")


module.exports = router;