var number = "";

for (i = 1; i < 11; i++) {
    number += i + "<br>"
}

document.writeln("The random value is " + Math.floor(Math.random() * 100) + "<br>");

var date = new Date();
document.write("Today's Date is " + date.getDate());