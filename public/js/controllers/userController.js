var userController = angular.module('userController', [
    
]);

userController.controller('UserController', ['$scope', '$http', '$routeParams', 'User', function($scope, $http, $routeParams, User) {

    var user = User.newUser('Namone', 'muggins1');
    alert(user.username + " | " + user.id);
    $scope.loggedIn = false;
}]);