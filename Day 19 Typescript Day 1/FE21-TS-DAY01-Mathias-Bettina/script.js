// var numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10];
// function multiply1(){
//     let printed = "";
//     // for (let i = 0; i < numbers.length; i++) {
//     //     let number = numbers[i];
//     //     let result = number * 1;
//         for (let i of numbers) {
//             for (let j of numbers) {
//                 let result = j * i;
//                 // document.write(`${i} X ${j} = ${result} <br>`);
//                 printed += `
//           <tr>
//             <td>${i}</td>
//             <td>x ${j} =</td>
//             <td>${result}</td>
//           </tr>
//         `
//             }
//         }
//     // }
//     return printed;    
// }
// document.getElementById("entry").innerHTML += multiply1() ;
// // function multiply() {
// //     for (let i of numbers) {
// //         for (let j of numbers) {
// //             let result = j * i;
// //             document.write(`${i} X ${j} = ${result} <br>`);
// //         }
// //     }
// // };
// BASIC EX 2
// let fullName = [{
//     fname: "Bettina",
//     lname: "Körbler"
// }, {
//     fname: "Mathias",
//     lname: "Fuchs"
// }];
// console.log(fullName);
// document.write(fullName[0].fname, fullName[0].lname)
// document.write(fullName[1].fname, fullName[1].lname)
// PRINT NAME 10 WITHOUT FOR EACH
// function bettina10() {
// for (let i=0; i < 10; i++) {
//         document.write(fullName[0].fname)
//     }
// };
// bettina10();
// PRINT NAME 10 WITH FOR EACH
var myArray = ["Mathias"];
myArray.forEach(function (value) {
    for (var i = 0; i < 10; i++) {
        document.write(myArray);
    }
});
// let myArray1 = ["Fuchs"];
// myArray.forEach(function (value) {
//     for (let i=0; i < 10; i++) {
//         console.log(myArray1);
//     }
// });
// PRINT LASTNAME WITHOUT 5 SECOND DELAY
// function showResult() {
//     let myArray1 = ["Fuchs"];
//     myArray.forEach(function (value) {
//     for (let i=0; i < 10; i++) {
//         console.log(myArray1);
//     }
// });
// }
// setTimeout(showResult, 5000);
// BASIC EX 3
var arrayNames = ["Mathias", "Bettina", "Theo", "Irati", "Julia", "Peter", "Acilio"];
for (var i in arrayNames) {
    console.log("This is the index " + i);
}
;
for (var _i = 0, arrayNames_1 = arrayNames; _i < arrayNames_1.length; _i++) {
    var i = arrayNames_1[_i];
    console.log("This is the value " + i);
}
;
arrayNames.forEach(function (value, index) {
    console.log("This is value " + value + " and this is the index " + index);
});
// TRICK 17
console.log("%cThis is a green text", "background-color:blue");
"color: red";
;
console.log("%cThis is a default font style", "color: blue; font-size: 20px");
