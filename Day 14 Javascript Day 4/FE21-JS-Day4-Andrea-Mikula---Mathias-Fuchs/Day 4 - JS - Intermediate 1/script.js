// function createTask(){

//     let newTask = document.getElementById("demo").value;

//     // we select the input from the id and .value will take the value from the input

//     document.getElementById("list").innerHTML += `<li>${newTask} </li>`;

//     addRemoveToList();

// }

function removeItem() {
  this.style.opacity = "0";

  // (this) here will back to the element that we will target or select

  this.style.transition = "1s";

  // setTimeout(()=>{this.remove();},1000);
}

function addRemoveToList() {
  let items = document.getElementsByClassName("santa");
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", removeItem);
  }
}

addRemoveToList();
