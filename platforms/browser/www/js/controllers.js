angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('weighYourBagCtrl', function($scope) {

  g = new JustGage({
    id: "gauge",
    value: 75,
    min: 0,
    max: 1200,
    title: "WEIGHT"
});
           


})
      
.controller('historyCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
 