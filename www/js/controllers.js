angular.module('starter.controllers', [])

.factory('localStorageInteractions', function() {

  //private
  var title;
  var body;

  return {


    // Sets a localStorage key value pair. Accepts two arguments. First argument is the key, second is the value.
    setLocalStorage: function(key, value) {
      var local = JSON.parse(localStorage.noteHistory);


      var note = {
        'title': key,
        body: value
      }
      local[key] = note;

      localStorage.noteHistory = JSON.stringify(local);
    },
    getLocalStorage: function(){
      var local = JSON.parse(localStorage.noteHistory);
      console.log(local);
      return local;
    },
    initNoteHistory: function(){
      if(localStorage.noteHistory === undefined){
        localStorage.noteHistory = "{}"
      }
    },
    setTitle : function(key){
      console.log(key);
      title = key;
    },
    getTitle: function(){
      return title
    },
     setBody : function(value){
      body = value;
    },
    getBody: function(){
      console.log(body);
      return body;
    }

  }
})
.controller('SidebarCtrl', ['localStorageInteractions',function($localStorageInteractions){

  var self = this;
  // Testing localStorage
  $localStorageInteractions.initNoteHistory();
  $localStorageInteractions.setLocalStorage('matt', 'iAmMatt');
  $localStorageInteractions.setLocalStorage('ben', 'iAmBen');
  self.allNotes = $localStorageInteractions.getLocalStorage();

  self.updateNotePage = function(key,value){
    $localStorageInteractions.setTitle(key);
    $localStorageInteractions.setBody(value);
   $localStorageInteractions.getBody();
   $localStorageInteractions.getTitle();
  }



//get the noteHistory object from localStorage and save as object
//ng-repeat key,value in noteObject
//on click change view to individual note page and pass in value to body



}])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  })

.controller('NotesCtrl', ['localStorageInteractions', function($localStorageInteractions) {
  var notes = this;
  notes.input = '';
  notes.title = '';



  notes.setLocal = $localStorageInteractions.setLocalStorage(notes.title, notes.input);
  notes.something = $localStorageInteractions.getTitle();
  console.log("notesSomethign ", notes.something);

  // Form data for the login modal

}])


/*
  Have a factory for getting and setting body, of each key value pair in local
   storage, and also saving things to local storage.
*/



.controller('PlaylistCtrl', function($scope, $stateParams) {
});


