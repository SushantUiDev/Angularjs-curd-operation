(function () {
	function cmDateOfBirthFn() {
		return {
			restrict: "A",
			
			link: function (scope, element, attrs) {
              
			  element.datepicker();
				
 
			}
		}
	}
	angular.module("common")
		.directive("cmDateOfBirth", [cmDateOfBirthFn]);
})();