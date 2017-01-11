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
            for (var i = 0; i < Messages.length; i++) {
                var CONTENT = Messages[i].content;
                var ID = Messages[i]._id;
                $scope.messages.push({ 'content': CONTENT, '_id': ID });
            }
        });
    };

    $scope.onDelete = function(message) {
        var Message = JSON.stringify(message);
        console.log("Deleting following message: " + Message);
        $http({
            url: '/messages',
            method: 'DELETE',
            data: Message, // send ID of item we want to delete from database
            headers: { 'Content-Type': 'application/json' } // tell the server what kinda of data this is...
        })

        $scope.getMessages(); // update page with current message list
    };
}]);
