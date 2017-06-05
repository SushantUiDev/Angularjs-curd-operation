(function(){
	function dirAutocompletFn($http){
		return{
			restrict:"AEC",
			scope={},
			link : function (scope,Element,attrs){
				Element.autocomplet({
					source:function(request,responce){
						$http({method:"jsonp",url:"scope.url"})
						   .success(function(data){
							responce(data);
						})
					},
					minLength:3
				})
				
			}
		}
	}
	angular.module("common")
		.directive("dirAutocomplet", ["$http",dirAutocompletFn]);
})();


