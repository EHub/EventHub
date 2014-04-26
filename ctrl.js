var app = angular.module("myapp", ["firebase"]);
function MyController($scope, $firebase) {
	var ref = new Firebase("https://resplendent-fire-491.firebaseio.com/");
	
	$scope.user = {
		uid : "1243423l4kj23l4kj23lk4j23lkjsldjf",
		events : [0, 1],
		interests : [0, 1, 2],
		subscriptions: [0];
		fbid: "23424l23l4kjlsjflwejfl"
	};

	$scope.events = {
		"April 25" : [{
			eid: 4,
			date: new Date(),
			title: "Hello",
			description: "Hello, world",
			sid: 0,
			location: [1, 2],
			building: "CSE",
			interests : [1, 2],
			going: 5
		}],

		"April 26th" : [{
			eid: 4,
			date: new Date(),
			title: "Karthik",
			description: "Karthik is awesome",
			sid: 0,
			location: [1, 2],
			building: "CSE",
			interests : [1, 2],
			going: 5
		}, {
			eid: 4,
			date: new Date(),
			title: "Sup"
			description: "Hello, Atul",
			sid: 0,
			location: [1, 2],
			building: "CSE",
			interests : [1, 2],
			going: 5
		}]
	}
}