// public/js/services/UserSvc.js

angular.module('UserSvc', []).factory('UserSvc', ['$http', function($http){
	return {
		get: function(cb){
			return $http.get('/api/users')
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		create: function(userData, cb){
			return $http.post('/api/users', userData)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		update: function(id, userData, cb){
			return $http.put('/api/users/'+id, userData)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		},
		delete: function(id, cb){
			return $http.delete('/api/users/'+id)
			.success( function(data,status){
				cb(data, null);
			})
			.error( function(data, status){
				cb(data,status)
			});
		}
	}
}]);
