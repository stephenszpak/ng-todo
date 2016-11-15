"use strict";

var app = angular.module("TodoApp",[]);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"}, {name:"All Items"}, {name:"New Item"}];
});

app.controller("TodoCtrl", function($scope){
	$scope.welcome = "hellow"
	$scope.showListView = true;
	$scope.items = [
		{
			id: 0,
			task: "mowtheloawn",
			isCompleted: true,
			assignedTo: "Zoe"
		},
		{
			id: 1,
			task: "blow the lawn",
			isCompleted: false,
			assignedTo: "William"
		},
		{
			id: 2,
			task: "bunch of stuff",
			isCompleted: false,
			assignedTo: "Zoe"
		}
	];

	$scope.allItems = function() {
		console.log("you clicks all itemds");
		$scope.showListView = true;
	}
	$scope.newItem = function() {
		console.log("you click new items");
		$scope.showListView = false;
	}
});