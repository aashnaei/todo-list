var myapp = angular.module('myapp', []);

myapp.controller('TodoCtrl', function ($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
	{text:'Learn Angular', done:false}, 
	{text:'Build an app', done:false}
	];


	$scope.getTotalTodos = function() {

		return $scope.todos.length;
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		})
	};

	$scope.addTodo = function (){

		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';

		setTimeout(function() {

			console.log('called')
			 var todos = document.querySelectorAll('.item');
		  
			  for ( var i=0, len = todos.length; i < len; i++ ) {
			    var item = todos[i];
			    var draggie = new Draggabilly( item, {
			      handle: '.handle'
			    });
			  }

		}, 500);

		 

		
	};

})

window.onload = function() {

  var items = document.querySelectorAll('.item');
  
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    var draggie = new Draggabilly( item, {
      handle: '.handle',
      //containment: '.todoList'
    });
  }


}
