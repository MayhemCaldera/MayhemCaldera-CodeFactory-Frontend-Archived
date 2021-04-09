// var names = ["Martin", "Thomas", "Klaus", "Maria", "David"];

// var points = [76, 85, 65, 93, 81];

var names = ["Martin", "Thomas", "Klaus", "Maria", "David"];
var points = [76, 85, 65, 93, 81];

for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let grade = points[i];
    switch (true) {
        case (grade < 60):
            console.log("The student  " + name + " has a Grade F ");
            break;
        case (grade < 70):
            console.log("The student  " + name + " has a Grade D");
            break;
        case (grade < 80):
            console.log("The student  " + name + " has a Grade C");
            break;
        case (grade < 90):
            console.log("The student  " + name + " has a Grade B");
            break;
        case (grade < 100):
            console.log("The student  " + name + " has a Grade A");
            break;
        case (grade == 100):
            console.log("The student  " + name + " has a Grade A+");
            break;
        default:
            console.log("Error, please try again");
            break;
    }
}


// var students = [['Martin', 76], ['Thomas', 85], ['Klaus', 65], ['Ishitha', 93], ['Thomas', 81]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }