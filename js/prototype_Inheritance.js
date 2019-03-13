// Helper to correctly setup the prototype chain
// -> sub extends base
function extend(base, sub) {
    var origProto = sub.prototype;
    sub.prototype = Object.create(base.prototype);
    for (var key in origProto) {
        sub.prototype[key] = origProto[key];
    }
    Object.defineProperty(sub.prototype, 'constructor', {
        enumerable: false,
        value: sub
    });
}

//--- Person Constructor / Prototyp
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    console.log(this.name + " is " + this.age);
}
Person.prototype.speak = function (phrase) {
    console.log(this.name + " says: " + phrase);
}

//----------------------------------------
function Prof(name, age) {
    Person.call(this, name, age); // -> Person see Listing 37a }
}
Prof.prototype.describe = function () {
    console.log("Prof. " + this.name + " is " + this.age + "years old");
}
extend(Person, Prof);