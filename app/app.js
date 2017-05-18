(function(){
	angular.module("myApp",["angularUtils.directives.dirPagination","command","header","products","login","register","common"]);
	
	angular.module("myApp")
	.config(function(){
		console.log("I am myApp Config Method");
	})
	.run(function(){
		console.log("I am myApp run method..");
	})
})();