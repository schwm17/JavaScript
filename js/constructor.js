function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.speak1 = function(phrase){
        console.log(this.name + " sagt: " + phrase);
    };
}

Person.prototype.speak = function(phrase){
    console.log(this.name + " says: " + phrase);
};

var bob = new Person("Bob", 30);
console.log(bob);
bob.speak("whats up?")

var bob1 = new Person1("Bob", 30);
console.log(bob1);
bob1.speak1("whats up?")