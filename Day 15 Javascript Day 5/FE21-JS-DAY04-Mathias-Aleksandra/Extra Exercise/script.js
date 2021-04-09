  
    var nights = window.prompt("How much nights you want to stay? Choose between 1 - 10","");
Number(nights);
   

class Hotel {

    numberOfNights = Math.floor(Math.random() * 11);
    image = document.getElementById("img1");
    constructor(hotelName, address){

        this.hotelName = hotelName;
        this.address = address;
        // this.image = image;
        this.checkNights();

    }

    showAvailability(){

        return document.getElementById("output-search").innerHTML = "Based on your search for Nights: " + this.numberOfNights + " we found this Hotel " + this.hotelName + " at " + this.address + " Outside view" + this.image;

    }


    checkNights (){

        if (nights < this.numberOfNights){

            // document.write("Reserve");
            this.showAvailability()
            document.getElementById("img1").style.visibility = "visible";
            document.getElementById("reserve").style.visibility = "visible";

    
        } else {
            document.write("Sorry nothing available.");
            document.getElementById("search").style.visibility = "visible";
        }

    }

}


var hotel1 = new Hotel("Imperial", "Cesaer Street 3", "src=img/hotel1.jpg");

document.getElementById("search").addEventListener("click", window.prompt);
// console.log(checkNights());

// console.log(hotel1.checkNights())
