// app/routes/todo.server.route.js

//grab models
var todo = require('../controllers/todo.server.controller');
var log = require('../controllers/log.server.controller');
//export routing
module.exports = function(router){

	router.route('/todos')
		.get(log.isLogin, todo.list)
		.post(log.isLogin, todo.create);

	router.route('/todos/:todo_id')
		.get(log.isLogin, todo.read)
		.put(log.isLogin, todo.update)
		.delete(log.isLogin, todo.remove);
}