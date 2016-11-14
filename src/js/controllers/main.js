function MainController ($scope) {

  $scope.number = 0;
  $scope.addLike = function () {
    $scope.number = $scope.number + 1;
  };

};

MainController.$inject = ['$scope'];
export { MainController };
