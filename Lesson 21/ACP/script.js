var number = "";

for (var i = -10; i < 11; i++) {
    number += i + "<br>"
}
document.writeln(number);

var random_number = Math.random() * 500;
var floor_number = Math.floor(random_number);
document.writeln(random_number + " <br>");
document.writeln(floor_number + " <br>");


document.writeln("The random value is " + Math.floor(Math.random() * 100) + "<br>");

var date = new Date();
document.write("Today's Date is " + date.getDate());