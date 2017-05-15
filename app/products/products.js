(function(){

	angular.module("products",[]);
	angular.module("products")
	.config(function(){
		console.log("i am products module config method..")
		
	})
	.run(function(){
		console.log("i am products module run method...");
	})
})();