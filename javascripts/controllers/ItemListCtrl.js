"use script";

app.controller("ItemListCtrl", function($scope, ItemFactory) {
	
	$scope.items = [];

	let getItems = function() {
		ItemFactory.getItemList().then(function(fbItems) {
			$scope.items = fbItems;
		});
	};

	getItems();
	
	$scope.deleteItem = function(itemId) {
		console.log("you deleted me");
		ItemFactory.deleteItem(itemId).then(function(response) {
			getItems();
		})
	};

	$scope.inputChange = function(thingy) {
		ItemFactory.editItem(thingy).then(function(response) {
			console.log("ctrl input change response", response);
		});
	};

});