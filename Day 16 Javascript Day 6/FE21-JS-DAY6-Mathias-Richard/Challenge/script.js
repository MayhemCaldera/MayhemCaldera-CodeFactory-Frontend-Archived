cars = JSON.parse(cars);
console.log(cars);



function carGeneration (cars){

    let cards = "";
    for (let i = 0; i < cars.length; i++){
    
        
        cards += `
        
        <div class="col">
          <div class="card h-70">
            <img src="${cars[i].image}" class="card-img-top img-thumbnail">
            <div class="card-body">
              <h5 class="card-title text-center">${cars[i].model}</h5>
              
            </div>
          </div>
        </div>
       

        `
    
        
      }
    return cards 
    
}

document.getElementById("entry").innerHTML += carGeneration(cars);



// var large = document.getElementById("entry"[0])

function img () {

    style.visibility = "hidden";

}
document.getElementById("entry")[0].addEventListener("click", img());


// function bigCard (cars){

//     let bigcard = "";
//     for (let i = 0; i < cars.length; i++){

//         bigcard += `
        
//         <div class="card">
//             <img src="${cars[i].image}" class="card-img-top">
//                 <div class="card-body">
//                     <h3 class="card-title">${cars[i].model}</h3>
//                     <p class="card-text">Horsepower: ${cars[i].hp} <br>Price: ${cars[i].price} <br>Color: ${cars[i].color} <br>Fuel Type: ${cars[i].fuelType}<br>Year of Construction: ${cars[i].yearOfConst} </p>
                    
//                 </div>
//             </div>

//         `

//     }
//     return bigcard
// }


// document.getElementById("entry").innerHTML += bigCard(cars);