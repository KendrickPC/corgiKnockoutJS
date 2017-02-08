// creating a new ViewModel
var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Corgi #1');
	this.nickNames = ko.observableArray(["Perkins the Corgi", "Abigail the Border Collie with a Corgi sister", "Corgi Love #3", "Corgi Love #4", "Corgi Love #5"]);
	this.imgSrc = ko.observable('img/corgi1.jpg');
	this.imgAttribution = ko.observable('http://www.images.google.com');
// adding levels to my clickCount
	this.level = ko.computed(function() {
		if (this.clickCount() < 1) {
			level = "Unborn puppy. Please click on picture to give birth to puppy.";
			return level;
		}
		else if (this.clickCount() < 2) {
			level = "1 year old puppy";
			return level;
		}
		else if (this.clickCount() < 3) {
			level = "2 year old puppy";
			return level;
		}
		else if (this.clickCount() < 4) {
			level = "3 year old puppy";
			return level;
		}
		else if (this.clickCount() < 5) {
			level = "4 year old puppy";
			return level;
		}
		else if (this.clickCount() < 6) {
			level = "5 year old puppy";
			return level;
		}
		else if (this.clickCount() < 7) {
			level = "6 year old puppy";
			return level;
		}
		else if (this.clickCount() < 8) {
			level = "7 year old puppy";
			return level;
		}
		else {
			level = "Corgi puppy FOREVER!";
			return level;
		};
	},this);
// effectively what I have done below is the following:
// 		var count = 0;
// 		count++;
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

// apply bindings in a new ViewModel
ko.applyBindings(new ViewModel())







