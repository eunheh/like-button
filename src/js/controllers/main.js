import $ from 'jquery';

function MainController ($scope) {

  $scope.number = 1;
  $scope.likesMsg = `0 Likes`;

  var add = true;
  $scope.toggle = function () {
    add = !add;
  }

    $scope.addLike = function () {
      if (add === true) {
        var newNumber = ++$scope.number;
        if (newNumber < 0){
        } else if (newNumber === 1) {
          $scope.likesMsg = `${newNumber} Like`;
        } else {
          $scope.likesMsg = `${newNumber} Likes`;
        }
      } else {
        var newNumber = --$scope.number;
        if (newNumber < 0) {
        } else if (newNumber === 1) {
          $scope.likesMsg = `${newNumber} Like`;
        } else {
          $scope.likesMsg = `${newNumber} Likes`;
        }
      }
    }

};

MainController.$inject = ['$scope'];
export { MainController };
