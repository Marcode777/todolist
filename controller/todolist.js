


function TodoCtrl($scope){
  $scope.todos =[
  {text:'1', done:false},
  {text:'2', done:false},
  {text:'3', done:false}
  ];


  $scope.getTotalTodos = function(){
    return $scope.todos.length;
  }

  $scope.addTodo = function (){
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  }

  $scope.clearCompleted = function(){
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    })
  };

};