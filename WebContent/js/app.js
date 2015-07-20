angular.module('sms', ['controllers','ngRoute']).
	config(function($routeProvider){
		$routeProvider.when('/profiles',{
			templateUrl:'partials/manageStudent.html'
		}).when('/new',{
			templateUrl:'partials/addStudent.html'
		}).otherwise('/profiles',{
			templateUrl:'partials/manageStudent.html'
		});
	});