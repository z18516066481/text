var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {   //当路由截取到localhost:3000 get请求后，根据Index.jade模板来渲染页面，并传递参数 title
  res.render('index', { title: '朱兴静' });  //到达此路径则渲染Index文件，并传出title值供 index.html使用
});

module.exports = router;






