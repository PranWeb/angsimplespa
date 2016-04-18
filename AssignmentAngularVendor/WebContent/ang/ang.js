var myApp = angular.module("myNepal",["ngRoute"]);
  myApp.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"temp/home.html",
		controller:"homeController"
	})
	.when("/about",{
		templateUrl:"temp/about.html",
		controller:"aboutController"
	})
	
	.otherwise({
		redirectTo:"/index"
	})
})
  