const numbers = [' 8 ', ' 21 ', ' 14 ', ' 4 ', ' 11 '];
document.getElementById('display_array').innerHTML = numbers;

function double() {
    const updated_numbers = numbers.map(function (x) {
        return x * 2
    })
    document.getElementById('display_update').innerHTML = updated_numbers;
}