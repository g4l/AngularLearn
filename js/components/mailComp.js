;(function(angular) {
  'use strict';
  angular.module('cardApp')
    .component('mail', {
      bindings: {
        usermail: '<'
      },
      templateUrl:`templates/mail.html`,
      controller: function() {
        viewMessage: false
      }
    })
})(window.angular);