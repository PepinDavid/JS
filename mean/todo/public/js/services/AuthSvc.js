// public/js/services/TodoSvc.js

angular.module('AuthSvc', []).factory('AuthSvc', ['$http','$q','$timeout', function($http, $q, $timeout){
	var user = null;
	
	function isLoggedIn(){
		if(user){
			return user;
		}else{
			return false;
		}
	};

	function getUserStatus(){
		return user;
	};

	function login(username, password, cb){
		  // create a new instance of deferred
  		var deferred = $q.defer();

		  // send a post request to the server
		  $http.post('api/user/login',
		    {username: username, password: password})
		    // handle success
		    .success(function (data) {
		      if(data.status === 200 && data.success){
		      	console.log('isLog')
		      	cb(data, status)
		        user = data.user;
		        deferred.resolve();
		      } else {
		      	cb(data, status)
		        user = null;
		        deferred.reject();
		      }
		    })
		    // handle error
		    .error(function (data) {
		    	cb(data);
			    user = null;
			    deferred.reject();
		    });

		  // return promise object
		  return deferred.promise;
	};

	function logout(){
		// create a new instance of deferred
		var deferred = $q.defer();

		// send a get request to the server
		$http.get('api/user/logout')
	    // handle success
	    .success(function (data) {
	      user = null;
	      deferred.resolve();
	    })
	    // handle error
	    .error(function (data) {
	      user = null;
	      deferred.reject();
	    });

		// return promise object
		return deferred.promise;
	};

	return({
		isLoggedIn: isLoggedIn,
		getUserStatus: getUserStatus,
		login: login,
		logout: logout,
	})
}]);