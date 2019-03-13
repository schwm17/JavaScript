var alphabetString = 
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
        "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";
        
var charToMorseCode = function(x){
    var alphabet = alphabetString.split(";");
    var chars = [];
    var morse = [];
    var morseCharArray = [];
    for(var i = 0; i < alphabet.length; i++){
        var c = alphabet[i].split("=");
        chars[i] = c[0];
        morse[i] = c[1];
        morseCharArray[i] = [{key: c[0], value: c[1]}];
    }
    for(var j = 0; j < chars.length; j++){
        if(x.toLowerCase() === chars[j]){
            console.log("Morse code for " + chars[j] + " is: " + morse[j]);
        }
    } 
}

charToMorseCode("a");