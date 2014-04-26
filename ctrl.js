var app = angular.module("myapp", ["firebase"]);

function MainController($scope, $firebase) {

	var usersRef = new Firebase("https://resplendent-fire-491.firebaseio-demo.com/users");
	var organizationsRef = new Firebase("https://resplendent-fire-491.firebaseio-demo.com/organizations");
	var eventsRef = new Firebase("https://resplendent-fire-491.firebaseio-demo.com/event");
	var interestsRef = new Firebase("https://resplendent-fire-491.firebaseio-demo.com/interests");
	$scope.users = $firebase(usersRef);
	$scope.orgs = $firebase(organizationsRef);
	$scope.events = $firebase(eventsRef);
	$scope.interests = $firebase(interestsRef);

	var auth = new FirebaseSimpleLogin(userRef, function(error, user) {
  	//
	});
	auth.login("facebook");

	$scope.addEvent = function(e) {

	  	$scope.title = "Title";
	  	$scope.description = "garbage";
	  	$scope.building = "CSE";
	  	$scope.time = (new Date()).getTime();

	  	var oid = $scope.addOrganization();

	  	var eventObject = {
	  		title: $scope.title,
	  		description: $scope.description,
	  		building: $scope.building,
	  		time: $scope.time
	  	};

	  	eventObject.eid = $firebase.push().name();
	  	$scope.events.$add(eventObject);
	  	return eventObject.eid;
	};

	$scope.editEvent = function(e) {
		var eventObject = {
  		title: $scope.title,
  		description: $scope.description,
  		building: $scope.building,
  		time: $scope.time
  	};
  	$scope.events.$add(eventObject);
  	return eventObject.eid;
	};

	$scope.addSubscription = function(e) {
		$scope.users
	};

	$scope.removeSubscription = function(e) {
		//TODO
	};

	//Returns new org's id
	$scope.addOrganization = function(e) {
		//TODO
	};

	$scope.addInterest = function(e) {
		//TODO
	};

	$scope.removeInterest = function(e) {
		//TODO
	};

	$scope.rsvp = function(e) {
		//TODO
	};

	$scope.unrsvp = function(e) {
		//TODO
	};
}

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
	};
}
