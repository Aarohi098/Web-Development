var text = "I love JavaScript"

function uppercase() {
    document.getElementById("result").innerHTML = text.toUpperCase();
}

function lowercase() {
    document.getElementById("result").innerHTML = text.toLowerCase();
}

function checkstartswith() {
    document.getElementById("result").innerHTML = text.startsWith("JavaScript");
}

function containtext() {
    var regexp = new RegExp("JavaScript");
    var result = regexp.test(text);
    document.getElementById("result").innerHTML = result
}

document.writeln("For Loop: <br>")

for (var i = 1; i <= 100; i = i + 1) {
    document.writeln(i)
}

document.writeln("<br><br>Switch/Case Statement: <br>")
var light = "red"

switch (light) {
    case "red":
        document.writeln("Stop!");
        break;
    case "yellow":
        document.writeln("Ready to Go!");
        break;
    case "green":
        document.writeln("Go!");
        break;
    default:
        document.writeln("Invalid Signal");
}