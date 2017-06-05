(function(){
	function profileCtrlFn($scope){
		$scope.user={
			
		}
		$scope.loginUser=function(){
			return $scope.user;
		}
	}
	angular.module("profile")
	.controller("profileCtrl",["$scope",profileCtrlFn]);
})();