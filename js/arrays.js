var a = ["String1", 2, "String2"];
a[5] = 9;

for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}

// For-Schlaufe für jedes Element im Array, undefinierte Elemente werden nicht ausgegeben
for(var i in a){
    console.log(i + " --> " + a[i]);
}

// Undefinierte Array slot werden ausgelassen
a.forEach(function(item, index){
    console.log(index + " -> " + item);
});

// Undefinierte Array slot werden ausgelassen
a.forEach(function(item, index){
    console.log(index + " -> " + item);
});




