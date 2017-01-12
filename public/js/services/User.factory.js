var userFactory = angular.module('userFactory', []);

userFactory.factory('User', function() {
    var text = "";
    var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < 25; i++) {
        text += allowed.charAt(Math.floor(Math.random() * allowed.length));
    }
    return {
         newUser:  function (user, pass) {
                        var User = {
                            username: user,
                            password: pass,
                            id: text,
                        };
                        return User;
                    }
    }
});