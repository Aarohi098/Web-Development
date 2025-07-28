const fruits = ['orange', 'apple', 'banana'];
document.getElementById('display_strings').innerHTML = fruits;

function ascstring() {
    fruits.sort();
    document.getElementById('display_strings').innerHTML = fruits;
}

function reversestring() {
    fruits.reverse();
    document.getElementById('display_strings').innerHTML = fruits;
}

const numbers = ['4 ', '7 ', '2 ', '3 ', '8 '];
document.getElementById('display_num').innerHTML = numbers;

function ascnum() {
    numbers.sort(function (a, b) {
        return a - b;
    });
    document.getElementById('display_num').innerHTML = numbers;
}

function descnum() {
    numbers.reverse(function (a, b) {
        return b - a;
    });
    document.getElementById('display_num').innerHTML = numbers;
}

function double() {
    const updated_numbers = numbers.map(function (x) {
        return x * 2
    })
    document.getElementById('display_num').innerHTML = updated_numbers;
}

const x = 5;
const y = 6;
const z = eval(x + y);
document.writeln(z)