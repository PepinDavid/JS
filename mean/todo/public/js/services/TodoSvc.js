// public/js/services/TodoSvc.js

angular.module('TodoSvc', []).factory('TodoSvc', ['$http', function($http){
	return {
		get: function(cb){
			return $http.get('/api/todos')
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		read: function(id, cb){
			return $http.get('/api/todos/'+id)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		create: function(todoData, cb){
			return $http.post('/api/todos', todoData)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		update: function(id, todoData, cb){
			return $http.put('/api/todos/'+id, todoData)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		delete: function(id, cb){
			return $http.delete('/api/todos/'+id)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		}
	}
}]);