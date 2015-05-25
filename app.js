var app  = angular.module('Whatever', ['ngRoute']); 

app.controller('MyController', function($scope, MyFactory) {
  
  
  $scope.Assn = [
    {
      assignment: 'Test First JavaScript',
      url: 'https://github.com/ssmith15/test_first_javascript',
      status: 'completed',
      comments: 'FUN!!!'
    
    },
    {
       assignment: 'flashcards-day1',
      url: 'https://github.com/ssmith15/flashcards-day1',
      status: 'completed',
      comments: 'COOL!'
    
    },
    {
     assignment: 'flashcards-day2',
      url: 'https://github.com/ssmith15/flashcards-day2',
      status: 'completed',
      comments: 'GROOVY!! '
    },
    {
      
      assignment: 'flashcards-day3',
      url: 'https://github.com/ssmith15/flashcards-day3',
      status: 'completed',
      comments: 'GNARLY!!!'
    }
  ];
  
  //function to serve page
  MyFactory.getAssignments().then(function(data) {
    $scope.Assn = data; 
  })
  
}); 


app.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
    when('/about', {
      templateUrl: 'about.html',

    }).
    when('/', {
      templateUrl: 'home.html',
      controller: 'MyController'
      
    })
  }
  
]);


app.factory('MyFactory', function($http) {
  
  //serve HTML
  return {
    getAssignments: function() {
      var query = {};
      return $http.get();
      
    }
    
  }
  
})
