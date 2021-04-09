

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

var animal2 = new Animal ("Ant", "3mg", "Pharao Ant");

var animal3 = new Animal ("Tyrannosaurus", "12.000 Kg", "Tyrannosaurus Rex");


var animals = [animal1, animal2, animal3];

for (let i of animals){

    document.write(i.showMessage());
    console.table(i);

}


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