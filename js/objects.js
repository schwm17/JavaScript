/* An object is a collection of properties
A property has a name and a value
An object can be seen as associative array (map) where the keys in the array are the names of the object’s properties */

var bob = {
    name: "Bob",
    age: 25
};

bob.age = bob.age + 1;
bob.age++

bob.haircolor = "black";

bob['year of birth'] = 1994;

bob.speak = function(phrase){
    console.log(this.name + " says: " + phrase);
}

console.log(bob);
bob.speak("Wie geht es dir?");