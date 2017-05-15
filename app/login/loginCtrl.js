(function(){
	function loginCtrlFn($scope){
		$scope.user={
			
		}
		$scope.loginUser=function(){
			return $scope.user;
		}
	}
	angular.module("login")
	.controller("loginCtrl",["$scope",loginCtrlFn]);
})();