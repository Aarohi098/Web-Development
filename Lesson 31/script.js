let choice = prompt("Welcome to the Area Calculator \nEnter you choice: \n1. Area for Rectangle \n2. Area for Square \n3. Area for Triangle \n4. Area of Circle \n5. Area of Trapezium \n6. Area of Parallelogram");

if (choice == 1) {
    const length = prompt("Enter the length of the rectangle");
    const breadth = prompt("Enter the breadth of the rectangle");
    const result = Number(length) * Number(breadth);
    alert("Area of Rectangle is: " + result)
}

else if (choice == 2) {
    const side = prompt("Enter the side of the square");
    const result = Number(side) * Number(side);
    alert("Area of Square is: " + result)
}

else if (choice == 3) {
    const side1 = prompt("Enter the side of the triangle");
    const height = prompt("Enter height of the triangle")
    const result = (Number(side1) * Number(height)) / 2;
    alert("Area of Square is: " + result)
}

else if (choice == 4) {
    const radius = prompt("Enter the radius of the circle");
    const result = (Number(radius) * 3.14) * (Number(radius) * 3.14);
    alert("Area of Circle is: " + result)
}

else if (choice == 5) {
    const base1 = prompt("Enter the 1st base of the trapezium");
    const base2 = prompt("Enter the 2nd base of the trapezium");
    const height = prompt("Enter the height of the trapezium");
    const result = ((Number(base1) + Number(base2)) * Number(height)) / 2;
    alert("Area of Trapezium is: " + result)
}

else if (choice == 6) {
    const length1 = prompt("Enter the length of the parallelogram");
    const height = prompt("Enter the height of the parallelogram");
    const result = Number(length1) * Number(height);
    alert("Area of Paralellogram is: " + result)
}



