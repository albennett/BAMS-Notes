angular.module('starter.controllers', [])

.factory('localStorageInteractions', function() {

  return {
    // Sets a localStorage key value pair. Accepts two arguments. First argument is the key, second is the value.
    setLocalStorage: function(key, value) {
      var note = {
        'title': key,
        body: value
      }
      localStorage[key] = JSON.stringify(note);
    }
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


/*
  Have a factory for getting and setting body, of each key value pair in local
   storage, and also saving things to local storage.
*/

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SidebarCtrl', ['localStorageInteractions',function($localStorageInteractions){

  var self = this;
  // Testing localStorage
  $localStorageInteractions.setLocalStorage('matt', 'iAmMatt');
//get the noteHistory object from localStorage and save as object
//ng-repeat key,value in noteObject
//on click change view to individual note page and pass in value to body



}])
