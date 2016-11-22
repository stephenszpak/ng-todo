"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory) {
	$scope.selectedItem = {};
	let itemId = $routeParams.id;
	console.log("route params", itemId);

	ItemFactory.getSingleItem(itemId).then(function(oneItem) {
		oneItem.id = itemId;
		$scope.selectedItem = oneItem;
	});

});