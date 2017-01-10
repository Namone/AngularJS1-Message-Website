var messageControllers = angular.module('messageController', []);

messageControllers.controller('MessageController', ['$scope', '$http', function($scope, $http) {

    angular.element(document).ready(function() {
        $scope.getMessages();
    });
    
    $scope.submitForm = function(message) {
        var data = {};
        var data = angular.copy(message);
        $scope.postMessage(message)
    }
    // Post message to server
    $scope.postMessage = function(data) {
        var jsonData = JSON.stringify(data); // convert to JSON
        $http({
            url: '/messages',
            method: 'POST',
            data: jsonData,
            headers: { 'Content-Type': 'application/json' }
        })
        $scope.getMessages(); // update page with new messages
    };

    $scope.getMessages = function() {
        $http({
            url: '/messages',
            method: 'GET',
        })
        .then (function(response) {
            var json = JSON.stringify(response.data.data);
            var Messages = JSON.parse(json);
            $scope.messages = [];  
            console.log(Messages[0].content);
            for (var i = 0; i < Messages.length; i++) {
                var CONTENT = Messages[i].content;
                $scope.messages.push({ 'content': CONTENT });
            }
        });
    };
}]);
