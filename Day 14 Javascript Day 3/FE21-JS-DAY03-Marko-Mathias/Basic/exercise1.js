//  var number = parseInt(Math.random() * (-6) * 26);
//  console.log(number);
var max = 25;
var min = -5;
var number = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(number);
if (number > -5 && number < 10) {
    document.write("The weather is cold");;
} else {
    document.write("The weather is moderate");

}