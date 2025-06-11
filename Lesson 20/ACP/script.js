function add() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var result = parseFloat(number1) + parseFloat(number2);
    document.getElementById("result").innerHTML = result;
}

function substract() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var result = parseFloat(number1) - parseFloat(number2);
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var result = parseFloat(number1) * parseFloat(number2);
    document.getElementById("result").innerHTML = result;
}