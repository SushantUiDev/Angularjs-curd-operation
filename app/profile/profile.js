(function(){
	angular.module("profile",[]);
	angular.module("profile")
	.config(function(){
		console.log("I am profile module config method..");
	})
	.run(function(){
		console.log("I am profile module run method..");
	})
})();