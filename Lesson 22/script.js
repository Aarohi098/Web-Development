//User-Defined Object
var pet = {
    name: "Buddy",
    age: 3,
    is_friendly: true,
    type: "Dog"
}

document.getElementById("pet_info").innerHTML = "<b>Name:</b> " + pet.name + "<br><b>Age:</b> " + pet.age + "<br><b>Is friendly:</b> " + pet.is_friendly + "<br><b>Type:</b> " + pet.type;

//Built-In Object
document.writeln(Math.abs(-56.7) + "<br>");

var num = Math.random();
var modified_num = Math.round(num * 200);
document.writeln(modified_num + "<br>")

//Arguements
function fndsum() {
    var sum = 0;
    var size = arguments.length
    for (var index = 0; index < size; index = index + 1) {
        sum = sum + arguments[index];
    }

    return sum;
}

document.writeln(fndsum(11, 14, 54, 13, 21));