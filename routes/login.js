var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');
let dbConfig = require("../database/DBConfig");
var userSQL = require("../database/usersql");
var pool = mysql.createPool(dbConfig.mysql);

// 响应一个JSON数据

/* GET index page. */
router.get('/login', function (req, res, next) {   //当路由截取到localhost:3000 get请求后，根据Index.jade模板来渲染页面，并传递参数 title
    res.render('login/login.html', {title: '朱兴静'});  //到达此路径则渲染Index文件，并传出title值供 login.html使用
});


router.post('/login', function (req, res, next) {
    var username = req.body.username;
    var userpwd = req.body.password;
    //输入验证
    if (!username || username == '') {
        console.log('用户名不能为空');
        res.send("用户名不能为空");
        return;
    }
    if (!userpwd || userpwd == '') {
        console.log('密码不能为空');
        res.send('密码不能为空');
        return;
    }
    //查库比较
    pool.getConnection(function (err, connection) {
        connection.query(userSQL.query, [username, userpwd], function (err, result) {
            // 释放连接
            if (result != null) {
                res.json({
                    code: '200', msg: '登陆成功','nickname':result[0]['nickname']
                });
            }
            connection.release();
        })
    })
    //关闭链接
    //connection.end();
});


//查询
/*connection.query('select * from `user_table`', function(err, rows, fields) {
 if (err) throw err;
 console.log('查询结果为: ', rows);
 });*/

module.exports = router;