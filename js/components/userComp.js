;(function(angular) {
  'use strict';
function UserCardCtrl($scope, $http) {
  var ctrl = this;

  ctrl.viewMessage = false,
  ctrl.viewList = true,
  // ctrl.mailData = 
  $http.get('js/users.json').success(function(data) {
      console.log(data)
      ctrl.maillist = data;
    })
}
angular.module('cardApp')
  .component('usercard', {
    templateUrl: `templates/usercard.html`,
    controller: UserCardCtrl
  })
})(window.angular);