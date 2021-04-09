var array: Array<Vehicle> = [];

class Vehicle {

    brandName: string;
    modelName: string;
    horsePower: number;
    fuelType: string;
    img: string;
    price: number;

    constructor(a, b, c, d, e, f) {

        this.brandName = a;
        this.modelName = b;
        this.horsePower = c;
        this.fuelType = d;
        this.img = e;
        this.price = f;
        console.log(this)
        array.push(this);
        console.table(array);
    }

    showMessage() {

        return `
        
        <div class="col">
        <div  class="card h-100" style="width: 18rem">
        <img src="${this.img}" class="card-img-top img-fluid img-own">
        <div class="card-body">
          <h5 class="card-title">${this.brandName}</h5>
          <p class="card-text">${this.modelName}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">HP: ${this.horsePower}</li>
          <li class="list-group-item">Fuel: ${this.fuelType}</li>
          <li id="price" class="list-group-item">Price: € ${this.price}</li>
        </ul>
        <div class="card-body">
          <a href="#" id="show" class="card-link">Show Price</a>
       </div>
        </div>
      </div>
        `

    }
}

new Vehicle("Nissan", "Skyline GTR 34", 450, "Gasoline", "https://i.pinimg.com/originals/64/11/fe/6411fef43317d7e924720155f8aa864b.jpg", 50000);

new Vehicle("Ford", "Raptor", 350, "Gasoline", "https://media.timesfreepress.com/img/photos/2018/03/16/1521256255_031718c01-test-drive-1_t1070_hb1b57275c1e792d79151b15b1fb36b061de3effd.jpg", 53000);

new Vehicle("Ford", "Sierra", 120, "Gasoline", "https://i.ytimg.com/vi/zNIOFk45rfk/maxresdefault.jpg", 300);




for (let val of array) {

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

        let price = this.parentNode.querySelector("#price");
        price.style.display = "none";

    })

});