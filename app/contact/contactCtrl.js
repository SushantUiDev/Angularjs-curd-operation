(function(){
	function contactCtrlFn(){
		var vm=this;
		vm.address1="AMITOJ CONSTRUCTIONS,Sukhavinder singh Constructor,R&B, G.H.M.C";
		vm.address2="CONSTRUCTORh.no.7-1-102/2 S.R.Nagar Hyd-33";
		vm.email1="sushantpaikrao1990@gmail.com";
		vm.email2="sushantpaikrao1991@gmail.com";
		vm.personInCharge="Akash  Paikrao";
		vm.supportCenter1="www.aparichit.com (hyderabad)";
		vm.supportCenter2="www.aparichit.com (mumbai)";
		
		
      vm.initMap=function() {
        var uluru = {lat: 20.387394, lng: 78.119767};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        vm.marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
   	
	}
	angular.module("contact")
	.controller("contactCtrl",[contactCtrlFn]);
})();