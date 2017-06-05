(function(){
	angular.module("myApp",["angularUtils.directives.dirPagination","products",
							"header","users","login","register","common","contact","profile"]);
	
	angular.module("myApp")
	.config(function(){
		console.log("I am myApp Config Method");
	})
	.run(function(){
		console.log("I am myApp run method..");
	})
})();