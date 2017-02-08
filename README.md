corgiKnockout
============================

<!-- Written by Kenneth P. Chang -->

knockout.js

[] favicon.ico retreived from the following link:
http://www.favicon.cc/?action=icon&file_id=888553

[] added levels to app.js file

[] http://knockoutjs.com/documentation/observableArrays.html
- This observable array initially contains three objects

var anotherObservableArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
]);

or 

this.nickNames = ko.observableArray(["Perkins the Corgi", "Abigail the Border Collie with a Corgi sister", "Corgi Love #3", "Corgi Love #4", "Corgi Love #5"]); 

<!-- The above code needs the following code in the HTML-->
        <div data-bind="foreach: nickNames">
            <li data-bind="text: $data"></li>
        </div>


[] Move the corgis, from the ViewModel, into a separate Dog function.
[] Update the bindings in the HTML file.
[] Update increment counter so that it can get the clickCount properly from the ViewModel. 




