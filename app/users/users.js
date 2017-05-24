(function(){

	angular.module("users",[]);
	angular.module("users")
	.config(function(){
		console.log("i am users module config method..")
		
	})
	.run(function(){
		console.log("i am users module run method...");
	})
})();