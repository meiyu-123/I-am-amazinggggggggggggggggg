angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('weighYourBagCtrl', function($scope) {

  g = new JustGage({
    id: "gauge",
    value: getRandomInt(0, 100),
    min: 0,
    max: 100,
    title: "WEIGHT",
    titleFontColor:"yellow",
    labelFontColor: "yellow"
  });
;
           


})
      
.controller('historyCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
 