var userController = angular.module('userController', []);

userController.controller('UserController', ['$scope', 'User', function($scope, User) {
    // TODO: FIX UNMET DEPENDENCY ERROR 
    $scope.onSubmit = function(username, password) {
        var user = User.newUser(username, password); // create new User object
        var response = User.createUser(user); // give it to the DB
    }
}]);