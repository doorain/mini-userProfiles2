angular.module('userProfiles').controller('MainController', function($scope, mainService) {
 $scope.pageNum = 1;
    $scope.getUsers = function() {

      mainService.getUsers($scope.pageNum);
      var promise = mainService.getUsers;
      promise.then(function(response) {
        $scope.users = response.data.data;
      });
    }
    $scope.getUsers();
  });
