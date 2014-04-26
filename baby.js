var myapp = angular.module('myapp', ["firebase"]);
myapp.controller('MainController', function MainController($scope, $firebase) {
	var ref = new Firebase("https://resplendent-fire-491.firebaseio-demo.com/events");
  $scope.events = $firebase(ref);
  $scope.users = $scope.events;
	$scope.message = "Hello, World";

	$scope.addUser = function(e) {
		if(e.keyCode != 13 || !$scope.name) {
			return;
		}

		$scope.users.$add({name: $scope.name}).then(function(ignore) {
			$scope.name = "";
		});
	};
  
  $scope.addEvent = function(e) {
	  	//var oid = $scope.addOrganization();

    if(e.keyCode != 13) {
      return;
    } else if(!$scope.title || !$scope.description || !$scope.building || !$scope.time) {
      //toastr.failure...
      return;
    }

    var eventObject = {
      oid: "2lk3jrl23jrlsldfj",
      title: $scope.title,
      description: $scope.description,
      building: $scope.building,
      date: "Date",
      time: "Time",
      interests: [],
      count: 0
    };

    var eid;
		$scope.events.$add(eventObject).then(function(param) {
			eid = param.name();
      var child = $scope.events.$child(eid);
      child.$update({eid: eid});
      console.log(eid);
      //close form
      //toastr.success...
		});

    $scope.rsvp(eid);

    return eid;
	};

	$scope.editEvent = function(e, eid) {
    if(e.keyCode != 13) {
      return;
    } else if(!$scope.title || !$scope.description || !$scope.building || !$scope.time) {
      //toastr.failure...
      return;
    }

    var old = $scope.events.$child(eid);
    
    var eventObject = {
      oid: old.oid,
      eid: eid,
      title: $scope.title,
      description: $scope.description,
      building: $scope.building,
      time: $scope.time, 
      interests: [],
      count: old.count
    };

    $scope.events.$remove(eid);

    $scope.events.$add(eventObject).then(function(param) {
      alert("Changed event! Success!");
      //toastr.success...
    });
  };

	$scope.addSubscription = function(e) {
		//TODO
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

	$scope.rsvp = function(eid) {
		var child = $scope.events.$child(eid);
    child.$update({count: child.count+1});
	};

	$scope.unrsvp = function(eid) {
		var child = $scope.events.$child(eid);
    $scope.events.$child(eid).$set({count: child.count - 1});
	};
});
