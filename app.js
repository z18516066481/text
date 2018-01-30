//这里主要是引用所必须要的模块，当然，这些模块是需要使用“npm install 模块名”安装的
//模块依赖
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var ejs = require('ejs');

////系统默认路由  依靠app.js来实现路由导航  require()则直接传一个相对路径一直到你的路由文件上，use()是路径导航
var index = require('./routes/index');
var users = require('./routes/users');

var login = require('./routes/login');
var home = require('./routes/home');

//定义app，生成一个express实例
var app = express();


//设置views文件夹为存刚视图文件的目录，即存放模板文件的目录
//_dirname为全局变量，存储当前正在执行的脚本所在的目录
app.set('views', path.join(__dirname, 'views'));
//设置视图模板引擎为jade
//app.set('view engine', 'jade');\
app.engine('html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//加载日志中间件
app.use(logger('dev'));
//加载解析json的中间件
app.use(bodyParser.json());
//架子啊解析urlencoded请求的中间件
app.use(bodyParser.urlencoded({ extended: false }));
//加载解析cookie的中间件
app.use(cookieParser());
//设置public文件夹为存放静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

//加载路由——路由控制器
app.use('/', index);
app.use('/users', users);

app.use('/login', login);
app.use('/', home);
// catch 404 and forward to error handler
//记载错误处理解决方法
//捕获404错误，并转发到错误处理器
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.locals.basedir = "/";
var port = 3000;
// error handler
//开发环境下的错误处理器，将错误信息渲染error模板并显示浏览器中
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port,function(){
    console.log("服务器开始")
});



//导出app对象供其他模板调用
module.exports = app;
