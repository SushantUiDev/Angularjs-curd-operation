(function(){
	angular.module("contact",[]);
	
	angular.module("contact")
	.config(function(){
		console.log("i am contact module config method..");
	})
	.run(function(){
		console.log("i am contact module run method..")
	})
})();