var userController = angular.module('userController', [
    
]);

userController.controller('UserController', ['$scope', '$http', "$window", 'User', function($scope, $http, $window, User) {
    var user = User.newUser('Namone', 'muggins1');
    //alert(user.username + " | " + user.id);
    $scope.loggedIn = false;

    $window.location.assign('/account/' + user.id);
}]);