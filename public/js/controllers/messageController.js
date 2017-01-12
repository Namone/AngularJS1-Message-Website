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
            url: '/messages-post',
            method: 'POST',
            data: jsonData,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function successCallback() {
            $scope.getMessages(); // update
        })
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
            if (Messages.length > 0) {
                for (var i = 0; i < Messages.length; i++) {
                    console.log("Getting message number " + i);
                    var CONTENT = Messages[i].content;
                    var ID = Messages[i]._id;
                    $scope.messages.push({ 'content': CONTENT, '_id': ID });
                }
            }
        });
    };

    $scope.onDelete = function(message) {
        var Message = JSON.stringify(message);
        console.log("Deleting following message: " + Message);

        $http({
            url: '/messages-delete',
            method: 'DELETE',
            data: Message, // send ID of item we want to delete from database
            headers: { 'Content-Type': 'application/json' } // tell the server what kinda of data this is...
        })
        .then(function successCallback() {
            $scope.getMessages(); // update
        });
    };
}]);
