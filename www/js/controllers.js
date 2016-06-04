angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope,$interval) {

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

function changegauge() {


var weightofbag  = Math.floor(Math.random() * 1000);

g.refresh (weightofbag) ;

}

// $interval( changegauge, 1000);



function connectSuccess (thebackpack)  { 
	alert('connect');
	ble.read (thebackpack.id,"19B10010-E8F2-537E-4F6C-D104768A1214","19B10001-E8F2-537E-4F6C-D104768A1214",updategauge);


}

function connectFailure (p) {
alert(JSON.stringify(p));
}


function updategauge (weightofbag) {

	g.refresh (weightofbag) ;
	$scope.start();
}

$scope.start = function() {
	alert('start');
	    ble.connect("19B10010-E8F2-537E-4F6C-D104768A1214", connectSuccess, connectFailure );
	   alert('stop');
}

		// body...
	
//ble.connect("19B10010-E8F2-537E-4F6C-D104768A1214", connectSuccess, connectFailure );
    alert('ble')       ;

})
   
.controller('weighYourBagCtrl', function($scope) {


})
      
.controller('historyCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
 