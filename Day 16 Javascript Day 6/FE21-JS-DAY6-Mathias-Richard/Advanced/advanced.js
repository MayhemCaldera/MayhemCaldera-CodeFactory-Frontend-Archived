books = JSON.parse(books);
console.log(books);


function bookGeneration (books){

    let cards = "";
    for (let i = 0; i < books.length; i++){
    
        
        cards += `
        
        <div class="card">
        <img src="${books[i].image}" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${books[i].title}</h3>
          <p class="card-text">${books[i].author} <br> ${books[i].price}</p>
          <p id="read" class="card-text" style="background-color: ${color()};">${readed()}</p>
        </div>
      </div>

        `
        function readed () {
          if (books[i].read === false){
                return "Didn´t read it";
                
              }else{
                return "Finished reading";
              }
        }
        function color(){
          if (books[i].read === false){
            return "red";
          } else {
            return "green";
          } 
          
        }
        
      }
    return cards 
    
}

document.getElementById("entry").innerHTML += bookGeneration(books);