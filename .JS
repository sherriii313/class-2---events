// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype method (shared function)
Student.prototype.introduce = function() {
    console.log("Hi, mera naam " + this.name + " hai aur meri age " + this.age + " hai");
};

// Object banaya constructor se
var s1 = new Student("Ali", 20);
var s2 = new Student("Ahmed", 22);

// Method call
s1.introduce();
s2.introduce();
