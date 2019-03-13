function Char(value, string){
    this.value = value;
    this.string = string;
}

function Font(name, chars){
    this.name = name;
    this.chars = chars;
    this.render = function (text) {
        return text;
    }
    this.write = function (text, to) {
        function render(text);
    }
}

var morseFont = {
    
}