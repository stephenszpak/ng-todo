"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.welcome = "hello"
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];


	ItemFactory.getItemList().then(function(fbItems) {
		$scope.items = fbItems;
	});

	$scope.allItems = function() {
		console.log("you clicks all itemds");
		$scope.showListView = true;
	}

	$scope.newItem = function() {
		console.log("you click new items");
		$scope.showListView = false;
	}

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length; //<---adds an ID to objects
		console.log("newTask in function", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
		$scope.showListView = true;
	}




});