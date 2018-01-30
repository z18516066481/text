/**
 * Created by Javaer on 2018/1/30.
 */
var UserSQL = {
    insert: 'INSERT INTO users(id,login_id) VALUES(?,?)',
    queryAll: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users WHERE id = ? ',
    query: 'select * from users Where login_id=? AND login_pwd =?'
};
module.exports = UserSQL;
