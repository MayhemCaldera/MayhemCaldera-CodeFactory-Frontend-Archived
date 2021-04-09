
var starters: Array<{
    dish: string,
    price: number
}> = [{dish: "Garnelen", price: 7},
      {dish: "Nudlsuppn", price: 4},
      {dish: "Caprese Salad", price: 6}
]

var main: Array<{
    dish: string,
    price: number
}> = [{dish: "Schnitzel", price: 12},
      {dish: "Pizza Salami", price: 7},
      {dish: "T-Bone-Steak", price: 35}

]

var desserts: Array<{
    dish: string,
    price: number
}> = [{dish: "Tiramisu", price: 4},
      {dish: "Kaiserschmarren", price: 5},
      {dish: "Creme Brulee", price: 9.99}

]


// console.table(starters)
// console.table(main)
// console.table(desserts)


for (let i = 0; i < starters.length; i++){
    let output:any = starters[i];
    document.write(output.dish + "<br>");
    document.write("€ " output.price + "<br>");

}