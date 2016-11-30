angular.module('ngApp', ['ngRoute', 'ngResource','ngStorage','chart.js','ngCookies'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/app/partials/home.html',
				controller: 'homeCtrl'
			})
			.when('/login', {
				templateUrl: 'app/partials/login.html',
				controller: 'loginCtrl'
			})
			.when('/register', {
				templateUrl: 'app/partials/register.html',
				controller: 'registerCtrl'
			})
			.when('/pools/:pool_id', {
				templateUrl: '/app/partials/pool.html',
				controller: 'poolCtrl' 
			})
			.when('/users/:user_id', {
				templateUrl: 'app/partials/userPanel.html',
				controller: 'userCtrl'
			})
			.otherwise({ redirectTo: '/' });
	});