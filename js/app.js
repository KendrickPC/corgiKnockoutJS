// creating a new ViewModel
var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('corgi1');
	this.imgSrc = ko.observable('img/corgi1.jpg');
	this.imgAttribution = ko.observable('http://www.google.com');

// effectively what I have done below is the following:
// 		var count = 0;
// 		count++;
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

	};
}
// apply bindings in a new ViewModel
ko.applyBindings(new ViewModel())







