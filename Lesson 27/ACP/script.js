
let originalArray = [2, 5, 8, 3, 7];

let newarray = originalArray.map(function (num) {
    return num * num;
});

function ascending() {
    newarray.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("product_value").innerHTML =
        "The ascending order of mapped values are: " + newarray.join(", ");
}

function descending() {
    newarray.sort(function (a, b) {
        return b - a;
    });
    document.getElementById("product_value").innerHTML =
        "The descending order of mapped values are: " + newarray.join(", ");
}


