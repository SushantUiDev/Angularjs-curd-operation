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
				"firstName": "sushant",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"1.jpg"
			},
			{
				"firstName": "vicky",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"2.jpg"
			},
			{
				"firstName": "nikhil",
				"lastName": "rathod",
				"userName": "nikhilrathod@gmail.com",
				"picture":"3.jpg"
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"1.jpg"
			},
			{
				"firstName": "vicky",
				"lastName": "singham",
				"userName": "vickysingham@gmail.com",
				"picture":"2.jpg"
			},
			{
				"firstName": "Akash",
				"lastName": "patil",
				"userName": "Akashpatil@gmail.com",
				"picture":"3.jpg"
			},
			{
				"firstName": "mayuri",
				"lastName": "gajbhiye",
				"userName": "mayurigajbhiye@gmail.com",
				"picture":"3.jpg"
			},
			{
				"firstName": "ravi",
				"lastName": "paikrao",
				"userName": "ravipaikrao@gmail.com",
				"picture":"1.jpg"
			},
			{
				"firstName": "emma",
				"lastName": "warght",
				"userName": "emmawarghtgmail.com",
				"picture":"2.jpg"
			},
			{
				"firstName": "reema",
				"lastName": "paikrao1",
				"userName": "reemapaikrao1@gmail.com",
				"picture":"3.jpg"
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
		vm.deletUser=function(user){
			console.log(user);
			//vm.index=-1;
			 vm.index = -1;
					var comArr = eval(vm.users);
					for (var i = 0; i < comArr.length; i++) {
						if (comArr[i].firstName === user.firstName) {
							vm.index = i;
							console.log(vm.index);
							break;
						}
					}
					if (vm.index === -1) {
						console.log(vm.index);
						alert("Something gone wrong");
					}
					vm.users.splice(vm.index, 1);
			vm.message="you delet user successigully..";
		}
		
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