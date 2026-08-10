function Plan(name, price) {
  this.name = name;
  this.price = price;
}

// prototype method
Plan.prototype.calcYear = function() {
  return this.price * 12;
};

// prototype property
Plan.prototype.type = "Hosting Plan";

// objects
var p1 = new Plan("Basic", 100);
var p2 = new Plan("Premium", 200);

// use
console.log(p1.calcYear());
console.log(p2.calcYear);

console.log(p1.type);
console.log(p2.type);

// proof same function
console.log(p1.calcYear === p2.calcYear);
