var module = angular.module("notesApp", []);

module.controller("NotesController", 
	function($scope, $http) {
		$scope.notes = [];
		var update = function() {
			$http.get("/notes")
				.success(function(notes) {
					$scope.notes = notes;
				});
		};
		update();	
	}
);