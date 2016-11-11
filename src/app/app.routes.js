lrdcom.config(
	function($stateProvider, $urlRouterProvider, $locationProvider, stringUtilsProvider) {

		$urlRouterProvider.otherwise('404');
		$urlRouterProvider.when('', '/');

		$stateProvider
			.state(
				'otherwise',
				{
					templateUrl: 'src/pages/about.html'
				}
			)

			.state(
				'home',
				{
					data: {
						cssClassnames: 'page-home'
					},
					templateUrl: 'src/pages/home.html',
					url: '/'
				}
			)

			.state(
				'404',
				{
					data: {
						cssClassnames: 'page-not-found'
					},
					templateUrl: 'src/pages/404.html',
					url: '/404'
				}
			)

			.state(
				'about',
				{
					data: {
						cssClassnames: 'about'
					},
					templateUrl: 'src/pages/about.html',
					url: '/about'
				}
			)

			.state(
				'docs',
				{
					templateUrl: function($stateParams) {
						return 'src/pages/' + $stateParams.doc + '.html';
					},
					url: '/docs/:doc'
				}
			);
	}
);