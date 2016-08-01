 
TweenMax.from("h1", 2, {x:-600});

 // var Anim = TweenMax.to(".w", 1, { x:-100 , opacity:0 , ease:Power1.easeInOut ,repeat:-1 , paused:true });

 var Anim = TweenMax.fromTo('.spin', 0.5, {
  rotation: 360, 
},
{
  rotation: -360,
  // delay: 1,
  // repeat: -1,
  // repeatDelay: 1,
  yoyo: true,
  immediateRender:false,
  paused:true
});

function TodoCtrl($scope){
  $scope.todos =[
  {text:'1', done:false},
  {text:'2', done:false},
  {text:'3', done:false}
  ];

  $('.btn').click( function(){  Anim.play(0)  }) ; //the value 0 will help the animation from the beginning each time the button is clicked

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

