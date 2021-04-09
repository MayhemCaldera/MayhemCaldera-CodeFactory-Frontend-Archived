
var links = ["https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200", "https://media.istockphoto.com/photos/autumn-forest-with-yellow-foliage-in-moderate-sunlight-picture-id1010488858?s=612x612", "https://images.pexels.com/photos/319930/pexels-photo-319930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200/", "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"]





var max = 40;
var min = -5;
var number = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(number);
if (number > -5 && number < 10) {
    document.getElementById("cold").innerHTML = ("The weather is cold") + '<img src ="' + links[0] + '">';
} else if (number > 10 && number < 25) {

    document.getElementById("moderate").innerHTML = ("The weather is moderate") + '<img src ="' + links[1] + '">';
} else if (number > 25 && number < 32) {

    document.getElementById("hot").innerHTML = ("The weather is hot") + '<img src ="' + links[2] + '">';
} else {
    document.getElementById("very-hot").innerHTML = ("The weather is very hot") + '<img src ="' + links[3] + '">';

}