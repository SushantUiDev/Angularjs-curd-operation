(function(){
	angular.module("header",[]);
	angular.module("header")
	.config(function(){
		console.log("I am header module config method..");
	})
	.run(function(){
		console.log("I am header module run method..");
	})
})();