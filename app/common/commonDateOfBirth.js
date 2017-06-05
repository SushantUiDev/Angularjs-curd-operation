(function () {
	function cmDateOfBirthFn() {
		return {
			restrict: "A",
			
			link: function (scope, element, attrs) {
              
			  element.datepicker();
				console.log(scope);
				console.log(element);
				console.log(attrs);
			}
		}
	}
	angular.module("common")
		.directive("cmDateOfBirth", [cmDateOfBirthFn]);
})();