(function(){
	function registerCtrlFn(){
		var vm=this;
		vm.user={
			
		}
		vm.registerUser=function(){
			console.log(vm.user);
			return vm.user;
		}
		/* ======= error message ==== */
		vm.errMsg={
			color:"red",
		}
		
		vm.date=new Date();
		vm.format="yyyy/MM/dd";
		
	}
	angular.module("register")
	.controller("registerCtrl",[registerCtrlFn]);
})();