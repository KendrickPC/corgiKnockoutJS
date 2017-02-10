var initialDogs = [
        {
            clickCount : 0,
            name : 'Perkins',
            imgSrc : 'img/corgi1.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ["Perkins the Beast"]
        },
        {
            clickCount : 0,
            name : 'Abigail',
            imgSrc : 'img/corgi2.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Abigail Snail']
        },
        {
            clickCount : 0,
            name : 'Brenda',
            imgSrc : 'img/corgi3.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Ting-Ting']
        },
        {
            clickCount : 0,
            name : 'Brady',
            imgSrc : 'img/corgi4.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['GOAT']
        },
        {
            clickCount : 0,
            name : 'Charles',
            imgSrc : 'img/corgi5.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Charlie Brown']
        }
    ]
var Dog = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nickNames = ko.observableArray(data.nickNames);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
// adding levels to my clickCount
	this.level = ko.computed(function() {
		if (this.clickCount() < 1) {
			level = "Unborn puppy. Click on picture to give birth to the corgi puppy.";
		}
		else if (this.clickCount() < 7) {
			level = "first year puppy";
		}
		else if (this.clickCount() < 8) {
			level = "1 year old puppy";
		}
		else if (this.clickCount() < 15) {
			level = "2 year old puppy";
		}
		else if (this.clickCount() < 22) {
			level = "3 year old puppy";
		}
		else if (this.clickCount() < 29) {
			level = "4 year old puppy";
		}
		else if (this.clickCount() < 36) {
			level = "5 year old puppy";
		}
		else if (this.clickCount() < 43) {
			level = "6 year old puppy";
		}
		else if (this.clickCount() < 50) {
			level = "7 year old puppy";
		}
		else if (this.clickCount() < 57) {
			level = "8 year old puppy";
		}
		else if (this.clickCount() < 64) {
			level = "9 year old puppy";
		}
		else if (this.clickCount() < 71) {
			level = "10 year old puppy";
		}
		else if (this.clickCount() < 78) {
			level = "11 year old puppy";
		}
		else if (this.clickCount() < 85) {
			level = "12 year old puppy";
		}
		else if (this.clickCount() < 92) {
			level = "13 year old puppy";
		}
		else if (this.clickCount() < 99) {
			level = "14 year old puppy";
		}
		else {
			level = "Corgi puppy FOREVER!";
		}
		return level;
	},this);
}
// creating a new ViewModel
var ViewModel = function() {
	// wrote a function "self" to access my inner "this"/local scope
	// and separate it, for organizational purposes, from the outer scope/outer "this"
	var self = this;
	// accessing the outer "this"/global scope
	this.dogList = ko.observableArray([]);
	initialDogs.forEach(function(dogItem) {
	// accessing the inner "this"/local scope with "self"
		self.dogList.push( new Dog(dogItem)	);
	});
	// accessing the outer "this"/global scope
	this.currentDog = ko.observable(this.dogList() [0]	);
	// accessing the outer "this"/global scope
	this.incrementCounter = function() {
		// calling in the inner "this"/local scope with "self"
		self.currentDog().clickCount(self.currentDog().clickCount() + 1);
	};
	this.setDog = function(clickedDog) {
		// calling the inner "this"/local scope with "self"
		self.currentDog(clickedDog);
	};
};
// Standard knockout call to apply bindings in a new ViewModel. 
// The following binding should be placed at the beginning of the project.
ko.applyBindings(new ViewModel())