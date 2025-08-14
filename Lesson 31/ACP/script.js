let choice = prompt("Welcome to the Perimeter Calculator \nEnter you choice: \n1. Perimeter for Rectangle \n2. Perimeter for Square \n3. Perimeter for Triangle \n4. Perimeter of Pentagon \n5. Perimeter of Hexagon");

if (choice == 1) {
    const length = prompt("Enter the length of the rectangle");
    const height = prompt("Enter the height of the rectangle");
    const result = (Number(length) + Number(length)) + (Number(height) + Number(height));
    alert("Perimeter of Square is " + result);
}

else if (choice == 2) {
    const side = prompt("Enter the side of the square");
    const result = (Number(side) + Number(side)) + (Number(side) + Number(side));
    alert("Perimeter of Square is " + result);
}

else if (choice == 3) {
    const side1 = prompt("Enter the side of the triangle");
    const result = Number(side1) + Number(side1) + Number(side1);
    alert("Perimeter of Triangle is " + result);
}

else if (choice == 4) {
    const side2 = prompt("Enter the side of the pentagon");
    const result = (Number(side2)) * 5;
    alert("Perimeter of Pentagon is " + result);
}

else if (choice == 5) {
    const side3 = prompt("Enter the side of the hexagon");
    const result = (Number(side3)) * 6;
    alert("Perimeter of Hexagon is " + result);
}