angular.module('ctr.controllers', [])

//login controller
   .controller('loginCtrl',function($scope,$ionicPopup){
       
      $scope.login = function(user) {
          var alertPopup = $ionicPopup.alert({
            title: 'Login Details',
            template: "email = " + user.email +" password = " + user.password
           });

          alertPopup.then(function(res) {
            // Custom functionality....
          });
     };

      $scope.register = function () {
        location.href = 'register.html';
      };

    })
   
// register controller
.controller('regCtrl', function($scope,$http,SERVER,$ionicPopup){

  $scope.signUp = function(newUser)
  {
    $http.post(SERVER.url+'/register.php', {name: newUser.name, number: newUser.number, email: newUser.email, pass: newUser.pass})
    .success(function(response){
        
      if(){
         var alertPopup = $ionicPopup.alert({
            title: 'Registration',
            template: "Registeration1" + response
           });

          alertPopup.then(function(res) {
                location.href = 'index.html';
          });
      }else{
           var alertPopup = $ionicPopup.alert({
            title: 'Registration',
            template: "registeration2"+ response
           });

          alertPopup.then(function(res) {
            // Custom functionality....
          });
       
      }
    });
  }
})


