navigation.controller(
	'navController',
	function($scope, docsModel, stringUtils) {
		$scope.navigationTree = docsModel.docsTree;
		$scope.stringUtils = stringUtils;

		$scope.toggleMenu = function() {
			$scope.checked = !$scope.checked;
			$('#wrapper').addClass('diminish');
		};

		$scope.closeMenu = function() {
			$('#wrapper').removeClass('diminish');
		};
	}
);
