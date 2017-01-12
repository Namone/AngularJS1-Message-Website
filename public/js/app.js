var app = angular.module('application', [
    'ngRoute',
    'appController',
    'messageController',
    'userController',
    'userFactory',
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/messages.html',
            controller: 'MessageController',
        })
        .when('/account/', {
            templateUrl: 'partials/myaccount.html',
            controller: 'UserController',
        })
        .when('/why', {
            templateUrl: 'partials/why.html',
        })
        .when('/story', {
            templateUrl: 'partials/story.html',
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
        })
        .otherwise({ // handle 404s
            redirectTo: '/',
        });
}]);

