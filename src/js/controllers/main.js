import $ from 'jquery';

function MainController ($scope) {

  $scope.number = 1;
  $scope.likesMsg = `0 Likes`;

  $scope.addLike = function (newNumber) {
    var newNumber = $scope.number++;
    console.log(newNumber)
    if (newNumber === 1) {
      $scope.likesMsg = `${newNumber} Like`;
    } else {
      $scope.likesMsg = `${newNumber} Likes`;
    }
  }

};

MainController.$inject = ['$scope'];
export { MainController };
