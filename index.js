/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// creating a constructor function 
// it takes 3 properties name , age and stomach which is an empty array 
function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// create an eat method that gives the person the ability to eat some edible - it has a param of somthing that we can pass food into 
// if the stomach length is < 10 the person can eat 
// we want to push the argument of something edible to the array (stomach)

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

// we need to create a poop method 
Person.prototype.poop = function(){
  this.stomach = [];
}

// method called toString - needs to return a string with name and age 

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

// create my object 

const personOne = new Person('Lauren', 29);

console.log(personOne.toString());
personOne.eat('pears');
personOne.eat('peaches');
personOne.eat('apples');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon){
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  return this.tank = gallons
  }


Car.prototype.drive = function(distance){
  this.odometer += distance
  this.tank = this.tank - distance/this.milesPerGallon;
  if (this.tank === 0){
    return `I ran out of fuel at ${this.odometer} miles!`
  };
};
console.log(Car("Honda Civic", 20));



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  };

  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function (){
    return `Playing with ${this.favoriteToy}`
  }

const lila = new Baby({
  name:'Lila', 
  age:1, 
  favoriteToy:'ball'
});

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. The function is called by new
  2. The function is called by call(), apply(), or bind()
  3. The function is called as a method, ie: obj.func()
  4. Scope: If strict mode is enabled, return undefined. Otherwise, return global object, ie: window.


  1. Window Binding - if none of the other rules apply 'this' 
  defaults to the window - unless you are in strict mode in which case it will return undefined
  2. Implicit Binding
// most common rule 
// it's used in about 80% of use cases 
// when the function is invoked - look to the left of the dot - thats what 'this' refers to 
// only applies to object with methods 
  3. // Explicit Binding 
// .call - will immediately invoke the function / .call you pass in arguments 1 by 1
// .apply - will immediate invoke the function / .apply you pass in arguments as an array
// .bind - you pass in arguments 1 by 1 - it does not immediately invoke the function. It returns a brand new function that can be invoked later
// all of these allow us to explicitly state what 'this' refers to 
  4.  Prototypes + Constructor Functions 
// constructor functions construct other objects - that is their whole purpose in life
// Capitalized Function name - you will want to use a capital with the new keyword 
// missing a return statement (this is not a gaurantee)
// this 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
