var initialDogs = [
        {
            clickCount : 0,
            name : 'Corgi 1',
            imgSrc : 'img/corgi1.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ["Perkins the Corgi", "Abigail the Border Collie with a Corgi sister", "Corgi Love #3", "Corgi Love #4", "Corgi Love #5"]
        },
        {
            clickCount : 0,
            name : 'Corgi 2',
            imgSrc : 'img/corgi2.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Tigger']
        },
        {
            clickCount : 0,
            name : 'Corgi 3',
            imgSrc : 'img/corgi3.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Pooh']
        },
        {
            clickCount : 0,
            name : 'Corgi 4',
            imgSrc : 'img/corgi4.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Rabbit']
        },
        {
            clickCount : 0,
            name : 'Corgi 5',
            imgSrc : 'img/corgi5.jpg',
            imgAttribution : 'https://www.images.google.com',
            nickNames : ['Owl']
        }
    ]
// };

var Dog = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nickNames = ko.observableArray(data.nickNames);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
// adding levels to my clickCount
	this.level = ko.computed(function() {
		if (this.clickCount() < 1) {
			level = "Unborn puppy. Please click on picture to give birth to puppy.";
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
		else {
			level = "Corgi puppy FOREVER!";
		}
		return level;
	},this);
}
// creating a new ViewModel
var ViewModel = function() {
	// wrote a function "that" to access my outer "this"
	var that = this;

	this.dogList = ko.observableArray([]);

	initialDogs.forEach(function(dogItem) {
		that.dogList.push( new Dog(dogItem)	);
	});

	this.currentDog = ko.observable(this.dogList() [0]	);

	this.incrementCounter = function() {
		// calling in the inner "this"
		that.currentDog().clickCount(that.currentDog().clickCount() + 1);
	};

	this.setDog = function() {
		console.log('working');
	};
};
// apply bindings in a new ViewModel
ko.applyBindings(new ViewModel())







