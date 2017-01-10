var app = angular.module('application', [
    'ngRoute',
    'appControllers'
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/messages.html',
            controller: 'MessageController',
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
        })
        .when('/why', {
            templateUrl: 'partials/why.html',
        })
        .when('/story', {
            templateUrl: 'partials/story.html',
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController',
        })
        .otherwise({ // handle 404s
            redirectTo: '/',
        });
}]);