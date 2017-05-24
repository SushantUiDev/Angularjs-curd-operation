(function () {

	function headerCtrlFn($scope,$rootScope) {
		var vm = this;
		vm.brandName = "SushantBrand";
		vm.navBar = ["login", "register", "users","products","contact"];
        vm.cartProducts=[];
		vm.loginTemplate = "app/login/login.tpl.html";
		vm.registerTemplate = "app/register/register.tpl.html";
		vm.usersTemplate = "app/users/users.tpl.html";
        vm.productsTemplate="app/products/products.tpl.html";
		vm.contactTemplate="app/contact/contact.tpl.html";
		
		vm.loadView = function (param) {
			console.log(param);
			if (param == "login") {
				vm.loadTemplate = vm.loginTemplate;
			} else if (param == "register") {
				vm.loadTemplate = vm.registerTemplate;
			} else if (param == "users") {
				vm.loadTemplate = vm.usersTemplate;
			}else if(param=="products"){
				vm.loadTemplate=vm.productsTemplate;
			}else if(param == "contact"){
				vm.loadTemplate=vm.contactTemplate;
			}
		};
		
		 $rootScope.$on("ITEM-ADDED", function(evt, args) {
            console.log(args);
            vm.cartProducts.push(args);
			// console.log(vm.cartProducts.length);
			 
        });
		
		$rootScope.showProduct=function(){
			console.log(vm.cartProducts);
		}
		vm.minimumCartProducts=5;
		vm.showMore=function(){
			vm.minimumCartProducts+=5;
			
		}


	}


	angular.module("header")
		.controller("headerCtrl", ["$scope","$rootScope",headerCtrlFn]);
})();