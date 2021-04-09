// -------------------Basic 1-------------------

var array: Array<Person> = []

class Person {

    fName: string;
    lName: string;
    age: number;
    jobTitle: string;

    constructor(a, b, c, d) {

        this.fName = a;
        this.lName = b;
        this.age = c;
        this.jobTitle = d;
        console.table(this);
        array.push(this);

    }
    showMessage() {

        return `<p>Hello there, my name is ${this.fName} ${this.lName} and I am ${this.age} years old, and I am a ${this.jobTitle}.</p>`
    }
}

new Person ("Mathias", "Fuchs", 34, "Full-Stack-Webdeveloper");


// ------------------Basic 2----------------------------

class Extra extends Person {
    salary: number;
    jobLocation: string;
    constructor(a, b, c, d, e, f){
        super(a,b,c,d)
        this.salary = e;
        this.jobLocation = f;
    }
    showMessage() {

        return `${super.showMessage()} My salary is € ${this.salary} and I work at ${this.jobLocation}.`

    }
}

new Extra ("Mathias", "Fuchs", 34, "Full-Stack-Webdeveloper", 2000, "My Design");

for (let val of array) {
document.getElementById("entry").innerHTML += val.showMessage(); 
}