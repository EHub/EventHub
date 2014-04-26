var myapp = angular.module('myapp', []);

 function randomString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = chars.length;
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  var Event = function(title, description, building, time, interests, rsvps, img_url, date) {
    this.eid = randomString();
    this.title = title;
    this.description = description;
    this.building = building;
    this.time = time;
    this.interests = interests;
    this.rsvps = rsvps;
    this.img_url = img_url;
    this.date = date;
  }

  var EventManager = function() {
    this.events = {};

    this.addEvent = function(id, ev) {
      this.events[id] = ev;

      var father = document.createElement("div");
      father.classList.add("col-md-4");
      father.id = id;
      var two = document.createElement("div");
      two.classList.add("thumbnail");
      var three = document.createElement("img");
      three.src = ev.img_url;
      var four = document.createElement("div");
      four.classList.add("caption");
      var five = document.createElement("h3");
      five.textContent = ev.title;
      var font = document.createElement("font");
      font.size = 2;
      var p1 = document.createElement("p");
      p1.innerHTML = "Date: <span> " + ev.date.toDateString() + " </span><br />" +
                    "Time: <span> " + ev.time + " </span><br />" +
                    "Where: <span> " + ev.building + " </span>";
      var p2 = document.createElement("p");
      p2.innerHTML = "<a href=\"#\" class=\"btn btn-primary\" role=\"button\">Going</a>" +
                      "<a href=\"#\" class=\"btn btn-default\" role=\"button\">More...</a>";
      
      font.appendChild(p1);
      font.appendChild(p2);
      four.appendChild(five);
      four.appendChild(font);
      two.appendChild(three);
      two.appendChild(four);
      father.appendChild(two);

      document.querySelector(".col-md-10").appendChild(father);
    }
  }

var em = new EventManager();

myapp.controller('MainController', function MainController($scope) {
  $scope.user = {
    uid: randomString(),
    name: "EventHub",
    interests: [],
    events: [],
    subscriptions: []
  }

  var eid = randomString();
  $scope.events = {
    "2l3jlklsdfls" : {
      uid: "sjflksdjf",
      title: "Blah",
      description: "lskdjflksdjfls"
    }
  };

  $scope.createEvent = function() {
    if(!$scope.title || !$scope.url || !$scope.date || !$scope.description || !$scope.building || !$scope.time) {
      //toastr.failure...
      console.log("Params empty?");
      return;
    }

    var newEvent = new Event($scope.title, $scope.description, $scope.building, $scope.time, [], 1, $scope.url, new Date($scope.date));
    console.log(em);
    em.addEvent(randomString(), newEvent);
    $scope.title = $scope.url = $scope.date = $scope.description = $scope.building = $scope.time = "";
	};

  $scope.removeEvent = function(eid) {
    $scope.events[eid] = null;
  };

	$scope.addSubscription = function(subId) {
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
	
  };

	$scope.unrsvp = function(eid) {
	
  };
});

myapp.filter("searchFor", function() {
return function(arr, searchString) {
  if(!searchString) {
    return arr;
  }

  var result = [];
  searchString = searchString.toLowerCase();
  console.log(arr);
  angular.forEach(arr, function(item) {
    //DO INTERESTS
    if(item.title.toLowerCase().indexOf(searchString) == 0) {
      result.push(item);   
    }
  });
  return result;
}
});
