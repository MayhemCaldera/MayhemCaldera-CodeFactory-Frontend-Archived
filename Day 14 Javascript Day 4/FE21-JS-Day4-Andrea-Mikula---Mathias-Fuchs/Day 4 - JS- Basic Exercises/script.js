

function form (){
    let firstName = document.getElementById("First").value;
    let secondName = document.getElementById("Second").value;
    let age = document.getElementById("Age").value;
    let select = document.getElementById("select").value;

    document.getElementById("output-first").innerHTML = firstName;
    document.getElementById("output-second").innerHTML = secondName;
    document.getElementById("output-age").innerHTML = age;
    document.getElementById("output-select").innerHTML = select;


    if (firstName.length > 5) {
        document.getElementById("output-first").style.color = "green";
        
    }
    else {
        document.getElementById("output-first").style.color = "red";
        
    }

    if (select == "It") {
        document.getElementById("output-select").style.backgroundColor = "purple";
    }
    else {
        document.getElementById("output-select").style.backgroundColor = "yellow";
    }

}

document.getElementById("btn").addEventListener("click",form);






