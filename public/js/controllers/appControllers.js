var appControllers = angular.module('appControllers', []);

appControllers.controller('HeaderController', ['$scope', '$http', function($scope, $http) {
    $scope.navigation = [
        {
            name: 'Messages',
            link: '#!/',
            active: true,
        },
        {
            name: 'About Us',
            link: '#!/about',
            active: false
        },
        {
            name: 'Why MessageCenter?',
            link: '#!/why',
            active: false
        },
        {
            name: 'Our Story',
            link: '#!/story',
            active: false
        },
        {
            name: 'Contact Us',
            link: '#!/contact',
            active: false
        }
    ]

    $scope.linkSwitch = function(linkIndex) {
        // Loop through, and set all other values to not active
        for(var i = 0; i < $scope.navigation.length; i++) {
            if (i != linkIndex) {
                $scope.navigation[i].active = false;
            } else {
                $scope.navigation[linkIndex].active = true;
            }
        }
    }
}]);

appControllers.controller('MessageController', ['$scope', '$http', function($scope, $http) {

}]);

appControllers.controller('ContactController', ['$scope', '$http', function($scope, $http) {

}]);
