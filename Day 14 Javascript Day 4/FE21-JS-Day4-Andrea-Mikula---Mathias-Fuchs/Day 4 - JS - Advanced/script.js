
let circle = document.getElementById("circle");
let text = document.getElementById("output");


circle.addEventListener("mouseover", function(){

    text.innerHTML = "You are inside the circle";

})

circle.addEventListener("mouseleave", function(){

    text.innerHTML = "You are outside the circle";

})


circle.addEventListener("click", function(){

    circle.style.backgroundColor = "grey";

})

circle.addEventListener("dblclick", function(){

    circle.style.backgroundColor = "blue";

})