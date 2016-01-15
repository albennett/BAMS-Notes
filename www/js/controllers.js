angular.module('starter.controllers', [])

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

.factory('localStore', function(){
    //private variables


    return{
      setLocalStorage : function(key,value){

        //if object doesnt exist in local storage create it
        if(localStorage.BAMSnoteHistory === undefined){
              localStorage.BAMSnoteHistory = "{}"
        }

        //get local storage object
        var local = JSON.parse(localStorage.BAMSnoteHistory);


        //set key and value for new key on BAMSnoteHistory object
        var note = {
          "title": key,
          "body": value
        }

        //add the new key to BAMSnoteHistory object
        local[key] = note;

        //reset localStorage
        localStorage.BAMSnoteHistory = JSON.stringify(local);
        console.log("local", JSON.parse(localStorage.BAMSnoteHistory));
      },
      getLocalStorage : function(){
        var local = JSON.parse(localStorage.BAMSnoteHistory);
        // console.log("local ", local);
        return local;
      }


    }

})

.controller('NotesCtrl', ['localStore', '$interval', function($localStore, $interval) {
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];

  var self = this;

  // $localStore.setLocalStorage('matt','iammatt');
  $interval(function(){
    if(localStorage.BAMSnoteHistory !== undefined){
    self.noteHistory = $localStore.getLocalStorage();

    }

  }, 500);
  // console.log("LOCAL STORAGE IS ", self.noteHistory);



  self.notes;






}])

.controller('SingleNoteCtrl', ['localStore','$stateParams',
  function($localStore, $stateParams, $state) {
  var self = this;

    var local = JSON.parse(localStorage.BAMSnoteHistory);
    self.title = $stateParams.noteTitle;
    self.body = local[self.title].body;

    console.log($stateParams);

}])

.controller('AddNoteCtrl', ['localStore','$state',
 function($localStore, $state) {
  var self = this;
  //ng-model for note body
  self.noteTitle;
  self.noteBody;
  var listener = new webspeech.Listener();

self.speechRec = function(){
    listener.listen("en", function(text) {
           console.log("text ", text);
           document.getElementById("text").value += text;
        });
}
self.noteBody = "banana"

  self.createNote = function(title,body){
    console.log("title", title);
    console.log("body", body);

    //save to local storage
    $localStore.setLocalStorage(title,body)
    $state.go('app.playlists')




  }

}]);
