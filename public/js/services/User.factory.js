var userFactory = angular.module('userFactory', []);

userFactory.factory('User,', ['$http', function($http) {
    
    var User = {
        username: '',
        password: '',
        id: '',
    }

    return {
         newUser:  function (user, pass) {
                        var text = "";
                        var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                        for (var i = 0; i < 25; i++) {
                            text += allowed.charAt(Math.floor(Math.random() * allowed.length));
                        }
                        User = {
                            username: user,
                            password: pass,
                            id: text,
                        };
                        return User;
                    },
        createUser: function(User) {
                        var User = JSON.stringify(User); // just to make sure it is correct format
                        $http({
                            url: '/account-create/',
                            method: 'POST',
                            data: User,
                            headers: {'Content': 'application/json'}
                        }) 
                        .then(function(response) {
                            return response;
                        });
        }
    }
}]);