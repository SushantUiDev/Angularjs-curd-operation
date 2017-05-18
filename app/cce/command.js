(function(){
	angular.module("command",[]);
	
	angular.module("command")
	.config(function(){
		console.log("i am command module config()...");
	})
	.run(function(){
		console.log("i am commond module run method..");
	})
})();