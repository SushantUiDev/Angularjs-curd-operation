(function () {

	function headerCtrlFn($scope,$rootScope) {
		var vm = this;
		vm.brandName = "SushantBrand";
		vm.navBar = ["login", "register", "database","command control exception","cart"];
        vm.cartProducts=[];
		vm.loginTemplate = "app/login/login.tpl.html";
		vm.registerTemplate = "app/register/register.tpl.html";
		vm.productsTemplate = "app/products/products.tpl.html";
        vm.commandcontrolTemplate="app/cce/command.tpl.html";
		vm.loadView = function (param) {
			console.log(param);
			if (param == "login") {
				vm.loadTemplate = vm.loginTemplate;
			} else if (param == "register") {
				vm.loadTemplate = vm.registerTemplate;
			} else if (param == "database") {
				vm.loadTemplate = vm.productsTemplate;
			}else if(param=="command control exception"){
				vm.loadTemplate=vm.commandcontrolTemplate;
			}
		};
		
		 $rootScope.$on("ITEM-ADDED", function(evt, args) {
            console.log(args);
            vm.cartProducts.push(args);
			 console.log(vm.cartProducts.length);
        });


	}


	angular.module("header")
		.controller("headerCtrl", ["$scope","$rootScope",headerCtrlFn]);
})();