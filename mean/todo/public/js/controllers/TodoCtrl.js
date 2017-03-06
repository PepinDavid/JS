// public/js/controllers/Todotrl.js

angular.module('TodoCtrl', []).controller('TodoController', ['$scope', 'TodoSvc', 'AuthSvc', function($scope, TodoSvc, AuthSvc){
	var todos = []
	TodoSvc.get(function(data,status){
		$scope.todos = data;
	})

	$scope.addTodo = function(todo){
		if(todo.titre !== ''){
			var titre = todo.titre.trim();
			if(titre.length > 1){
				TodoSvc.create(todo, function(data, status){
					if(data.success){
						$scope.todos.push(data.todo);
					}
					$scope.response = data.mess;
					$scope.formTodo.titre = '';
				})
			}else{
				$scope.response = 'Les champs sont vides !!!';	
			}
		}else{
			$scope.response = 'Les champs sont vides !!!';
		}
	};

	$scope.removeTodo = function(index){
		var todo = $scope.todos[index];
		TodoSvc.delete(todo._id, function(data){
			$scope.todos.splice(index, 1);
		})
	};

}]).controller('TodoDetailController', ['$scope', '$routeParams', 'TodoSvc', function($scope, $routeParams, TodoSvc){
	TodoSvc.read($routeParams.id, function(data, status){
		$scope.todo = data;
		$scope.descriptions = data.descriptions;
	});

	$scope.addDetail = function(todo){
		if(todo.descriptions !== undefined){
			var description = todo.descriptions;
			if(description.trim() !== ''){
				TodoSvc.update($routeParams.id, todo, function(data, status){
					if(data.success){
						$scope.descriptions.push(description);
					}
					$scope.formTodo.descriptions = '';
				});	
			}
		}
	};

	$scope.removeDescription = function(index){
		var el = {};
		el.pos = index;
		TodoSvc.update($routeParams.id, el, function(data, status){
			if(data.success){
				$scope.descriptions.splice(index, 1);
			}
		})
	};

}]);