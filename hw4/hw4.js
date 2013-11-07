// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.

//JG: I made all the code flush left to keep style consistent with all other submissions

var athlete1 = {};
athlete1.name = "Joe";
athlete1.height = "1.95"; // in meters
//JG: Comment said "zero years at birth" when you're assigning a value. I got rid of the comment.
athlete1.age = 23;
athlete1.countryOrigin = "USA";
athlete1.medals = [];
athlete1.isOlympian = true;

athlete1.introduce = function() {
	//JG: This only returns the string "USA"
	// return ("Hello! My name is ", this.name, "and I am from ", this.countryOrigin);

	return "Hello! My name is " + this.name + " and I am from " + this.countryOrigin;
};

//JG: I converted MedalToAdd -> medalToAdd to keep camel casing. 
//JG: Beginning capital letter means it's a prototype in JavaScript.
athlete1.addMedal = function(medalToAdd) {
	this.medals.push(medalToAdd);
};




// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};

athlete2['name'] = "Joe";
athlete2['height'] = "1.95"; // in meters
athlete2['age'] = 23;
athlete2['countryOrigin'] = "USA";
//JG: You used the push method later on, but this wasn't made an array
athlete2['medals'] = [];
athlete2['isOlympian'] = true;

athlete2['introduce'] = function() {
	//JG: I'm using associative array syntax within the methods as well
	return "Hello! My name is " + this['name'] + " and I am from " + this['countryOrigin'];
};

athlete2['addMedal'] = function(medalToAdd) {
	this['medals'].push(medalToAdd);
};



// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
	// set key/value pairs inside here

	name: "Joe",
	height: "1.95", // in meters
	age: 23, // zero years at birth
	countryOrigin: "USA",
	medals: [],
	isOlympian: true,

	introduce: function() {
		return "Hello! My name is " + this.name + " and I am from " + this.countryOrigin;
	},

	addMedal: function(medalToAdd) {
		this.medals.push(medalToAdd);
	},
};



// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

function Athlete() {
	this.name = "";
	this.height = "0"; // in meters
	this.age = 0; // zero years at birth
	this.countryOrigin = "unknown";
	this.medals = [];
	this.isOlympian = false;

	this.introduce = function() {
		return "Hello! My name is " + this.name + " and I am from " + this.countryOrigin;
	};

	this.addMedal = function(medalToAdd) {
		this.medals.push(medalToAdd);
	};
}

//JG: This one actually takes arguments
function Athlete2(name, height, age, countryOrigin, medals, isOlympian) {
	this.name = name;
	this.height = height; // in meters
	this.age = age;
	this.countryOrigin = countryOrigin;
	this.medals = medals;
	this.isOlympian = isOlympian;

	this.introduce = function() {
		return "Hello! My name is " + this.name + " and I am from " + this.countryOrigin;
	};

	this.addMedal = function(medalToAdd) {
		this.medals.push(medalToAdd);
	};
}

// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();

//JG: What's the s prefix for? 
//JG: If it means "string" why are the array and Boolean variables prepended with "s"?
function Swimmer(sName, sAge, sCountry, sHeight, sMedalsArray, sOlympianTF, sBranding) {
	this.name = sName;
	this.height = sHeight; // in meters
	this.age = sAge;
	this.countryOrigin = sCountry;
	this.medals = sMedalsArray;
	this.isOlympian = sOlympianTF;
	this.branding = sBranding;

	this.swim = function() {
		return "Splash splash splash";
	};
};

Swimmer.prototype = new Athlete();
//JG: You also need a constructor
Swimmer.prototype.constructor = Athlete;

var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93, ['gold', 'gold', 'silver'], true, 'Speedo');