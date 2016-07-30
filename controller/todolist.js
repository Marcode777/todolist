 
TweenMax.from("h1", 2.5, {x:-600, rotation:360});

 // var Anim = TweenMax.to(".w", 1, { x:-100 , opacity:0 , ease:Power1.easeInOut ,repeat:-1 , paused:true });


function TodoCtrl($scope){
  $scope.todos =[
  {text:'1', done:false},
  {text:'2', done:false},
  {text:'3', done:false}
  ];

  // $('.btn').click( function(){  Anim.play()  }) ;

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

