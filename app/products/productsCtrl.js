(function () {
	function productsCtrlFn($rootScope) {
		var vm = this;
		vm.newUser = {

		}
		vm.clickedUser={
			
		}
		vm.message="";
		vm.users = [
			{
				firstName: "sushant",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"1.jpg"
			},
			{
				firstName: "vicky",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"2.jpg"
			},
			{
				firstName: "vicky1",
				lastName: "paikrao1",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"3.jpg"
			},
			{
				firstName: "sushant",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"1.jpg"
			},
			{
				firstName: "vicky",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"2.jpg"
			},
			{
				firstName: "vicky1",
				lastName: "paikrao1",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"3.jpg"
			},
			{
				firstName: "vicky1",
				lastName: "paikrao1",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"3.jpg"
			},
			{
				firstName: "sushant",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"1.jpg"
			},
			{
				firstName: "vicky",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"2.jpg"
			},
			{
				firstName: "vicky1",
				lastName: "paikrao1",
				userName: "sushantpaikrao1990@gmail.com",
				picture:"3.jpg"
			}
		 ]
		
		vm.register = function () {
			console.log(vm.newUser);
			vm.users.push(vm.newUser);
			vm.newUser={};
			vm.message="you register new user..";
		}
		vm.clearMessage=function(){
			vm.message="";
		}
		
		
		vm.selectUser=function(user){
			console.log(user);
			vm.clickedUser=user;
		}
		
		
		vm.updateUser=function(){
			vm.message="you update user successifully ..";
		}
		
		/*vm.deletUser=function(user){
		    vm.users.splice( $index, 1 );
			vm.users.splice(vm.users.indexOf(vm.clickedUser,1));
			vm.message="you deleted user successifully ..";
			
		}
		*/
		 vm.deletUser = function(name){
          var index = -1;
          var comArr = eval( vm.users );
          for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].name === name ) {
                    index = i;
                    break;
                 }
          }
          if( index === -1 ) {
               alert( "Something gone wrong" );
          }
          vm.users.splice( index, 1 );
       };
		vm.addToCart=function(args){
			console.log(args);
			// $rootScope.$broadcast("ITEM-ADDED", item);
            //send notification 
			$rootScope.$broadcast("ITEM-ADDED",args);
			
		}
		
	}
	angular.module("products")
		.controller("productsCtrl", ["$rootScope",productsCtrlFn]);
})();