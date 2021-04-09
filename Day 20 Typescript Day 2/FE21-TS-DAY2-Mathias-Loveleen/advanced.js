var array = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(a, b, c, d, e, f) {
        this.brandName = a;
        this.modelName = b;
        this.horsePower = c;
        this.fuelType = d;
        this.img = e;
        this.price = f;
        console.log(this);
        array.push(this);
        console.table(array);
    }
    Vehicle.prototype.showMessage = function () {
        return "\n        \n        <div class=\"col\">\n        <div  class=\"card h-100\" style=\"width: 18rem\">\n        <img src=\"" + this.img + "\" class=\"card-img-top img-fluid img-own\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.brandName + "</h5>\n          <p class=\"card-text\">" + this.modelName + "</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">HP: " + this.horsePower + "</li>\n          <li class=\"list-group-item\">Fuel: " + this.fuelType + "</li>\n          <li id=\"price\" class=\"list-group-item\">Price: \u20AC " + this.price + "</li>\n        </ul>\n        <div class=\"card-body\">\n          <a href=\"#\" id=\"show\" class=\"card-link\">Show Price</a>\n       </div>\n        </div>\n      </div>\n        ";
    };
    return Vehicle;
}());
new Vehicle("Nissan", "Skyline GTR 34", 450, "Gasoline", "https://i.pinimg.com/originals/64/11/fe/6411fef43317d7e924720155f8aa864b.jpg", 50000);
new Vehicle("Ford", "Raptor", 350, "Gasoline", "https://media.timesfreepress.com/img/photos/2018/03/16/1521256255_031718c01-test-drive-1_t1070_hb1b57275c1e792d79151b15b1fb36b061de3effd.jpg", 53000);
new Vehicle("Ford", "Sierra", 120, "Gasoline", "https://i.ytimg.com/vi/zNIOFk45rfk/maxresdefault.jpg", 300);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementById("entry").innerHTML += val.showMessage();
}
var prize = document.getElementById("show");
var prizeArray = Array.prototype.slice.call(prize);
// for (let i = 0; i < array.length; i++) {
//     prize.style.display = "none";
// }
console.log(prize);
// console.log(prizeArray);
prizeArray.forEach(function (pr) {
    pr.addEventListener("click", function () {
        var price = this.parentNode.querySelector("#price");
        price.style.display = "none";
    });
});
