

class Person {

    constructor(name, age, job){

        this.Fname = name;
        this.age = age;
        this.job = job;

    }

    showMessage(){
        return "Hi my name is " + this.Fname + " and I´m " + this.age + " year´s old and work as a " + this.job + ".<br>";
    }

}


var person1 = new Person ("John", 33, "IT-Guru");

var person2 = new Person ("Jane", 27, "Nurse");

var person3 = new Person ("Mathias", 34, "Full-Stack Webdeveloper");


var people = [person1, person2, person3];

for (let i of people){

    document.write(i.showMessage());
    console.table(i);

}

class PersonPlus extends Person {

    constructor(name, age, job, child, favcolor, pet){

        super(name, age, job);
        this.child = child;
        this.favcolor = favcolor;
        this.pet = pet;

    }

    showMessage(){

        return super.showMessage() + " I have " + this.child  + ". My favorite color is " + this.favcolor + " and I have also a " + this.pet + ".<br>";

    }

}

var person4 = new PersonPlus ("Mary", 23, "PR Manager", "1 child", "brown", "dog");

var person5 = new PersonPlus ("Harry", 55, "Janitor", "no children", "yellow", "cat");

var person6 = new PersonPlus ("Luisa", 36, "Marine Biologist", "3 children", "blue", "goldfish");

var peopleplus = [person4, person5, person6];

for (let i of peopleplus){

    document.write(i.showMessage());
    console.table(i);

}

// -------------------Animal---------------------

class Animal {

    constructor(name, weight, type){

        this.name = name;
        this.weight = weight;
        this.type = type;

    }

    showMessage(){

        return "I am a " + this.name + ", my weight is about " + this.weight + " and I´m a " + this.type + ".<br>";

    }

}

var animal1 = new Animal ("Elephant", "4000 Kg", "Asian Elephant");

var animal2 = new Animal ("Ant", "3 mg", "Pharao Ant");

var animal3 = new Animal ("Tyrannosaurus", "12.000 Kg", "Tyrannosaurus Rex");


var animals = [animal1, animal2, animal3];

for (let i of animals){

    document.write(i.showMessage());
    console.table(i);

}


class Fish extends Animal {

    constructor(name, weight, type, water, size, depth){

    super(name, weight, type);
    this.water = water;
    this.size = size;
    this.depth = depth;

    }

    showMessage(){

        return super.showMessage() + "I live in " + this.water + ". I have a relative size of " + this.size + " and I prefer a depth between " + this.depth + ".<br>";

    }

}


var animal4 = new Fish("Sunfish", "1000 Kg", "Ocean Sunfish", "Saltwater", "1.8 m", "48 to 198 meters");

var animal5 = new Fish("Shark", "34 Kg", "Angelshark", "Saltwater", "1.3 m", "20 to 560 meters");

var animal6 = new Fish("Gill", "1.2 Kg", "Blue Gill", "Freshwater", "19 cm", "2 to 5 meters");


var fish = [animal4, animal5, animal6];

for (let i of fish){

    document.write(i.showMessage());
    console.table(i);

}


// --------------------------Car-------------------------------

class Car {

    constructor (brand, model, ps){

        this.brand = brand;
        this.model = model;
        this.ps = ps;

    }

    showMessage(){

        return "The " + this.brand + " has many model´s to offer but I prefer the " + this.model + ", because it has " + this.ps + " PS.<br>";

    }
    
}

var car1 = new Car ("Nissan", "Skyline", 400);

var car2 = new Car ("Toyota", "Supra", 340);

var car3 = new Car ("Honda", "CRX", 120);


var cars = [car1, car2, car3];

for (let i of cars){

    document.write(i.showMessage());
    console.table(i);

}


class MotorBike extends Car {

    constructor (brand, model, ps, tire, color, dezibel) {

        super(brand, model, ps);
        this.tire = tire;
        this.color = color;
        this.dezibel = dezibel;

    }

    showMessage(){

        return super.showMessage() + "I have " + this.tire + " tires and I shine in " + this.color + " and I can make " + this.dezibel + " of noise :D. <br>";

    }
    
}


var bike1 = new MotorBike ("Honda", "CBR 1000", 217, 2, "Grand Prix Red", "94 db");

var bike2 = new MotorBike ("Harley Davidson", "Freewheeler", 88, 3, "Vivid Black", "95 db");

var bike3 = new MotorBike ("Suzuki", "Hayabusa", 175, 2, "Venom Green", "91 db");



var bikes = [bike1, bike2, bike3];

for (let i of bikes){

    document.write(i.showMessage());
    console.table(i);

}
