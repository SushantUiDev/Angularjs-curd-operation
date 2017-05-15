(function () {
	function productsCtrlFn() {
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
				userName: "sushantpaikrao1990@gmail.com"
			},
			{
				firstName: "vicky",
				lastName: "paikrao",
				userName: "sushantpaikrao1990@gmail.com"
			},
			{
				firstName: "vicky1",
				lastName: "paikrao1",
				userName: "sushantpaikrao1990@gmail.com"
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
		
		vm.deletUser=function(){
			vm.users.splice(vm.users.indexOf(vm.clickedUser,1));
			vm.message="you deleted user successifully ..";
			
		}
		
	}
	angular.module("products")
		.controller("productsCtrl", [productsCtrlFn]);
})();