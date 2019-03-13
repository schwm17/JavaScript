var colors = ["red", "blue", "green"];
colors[10] = "yellow";

for(var i = 0; i < colors.length; i++){
    console.log(i + " -> " + colors[i]);
}

colors.forEach(function (item, index) {
    console.log(index + " -> " + item);
});