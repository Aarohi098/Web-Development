class Animal {
    //properties 
    static kingdom = "Animal Kingdom";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        document.writeln("<br>Animal Info:<br>");
        document.writeln("Name: " + this.name + "<br>");
        document.writeln("Age: " + this.age + "<br>");
    }
}
class Dog extends Animal {
    makeSound() {
        document.writeln("<br>Dog barks<br>");
    }
}

class Rabbit extends Animal {
    walkStyle() {
        document.writeln("<br>Rabbit hops<br>");
    }
}

const dog = new Dog("Buddy", 3);
document.writeln("Dog Kingdom: " + Dog.kingdom + "<br>");
dog.displayInfo();
dog.makeSound();

document.writeln("<br>");

const rabbit = new Rabbit("Rabbity", 5);
document.writeln("Rabbit Kingdom: " + Rabbit.kingdom + "<br>");
rabbit.displayInfo();
rabbit.walkStyle();
