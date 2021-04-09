//  Basic Exercise  2 and 3

let age = 30;

console.log("Hi my name is Yasmin"+"i am "+age+"years old");

let players =["Martin", "Thomas", "Peter", "Mathias", "Niki"];

console.log("The most valuable player of the match is"+players[2]);

                                                    // intermediat

let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort());

let fruit = ["apple", "banana", "kiwi"];
fruit.push("orange");
console.log(fruit);

fruit.pop();

console.log(fruit);

let animals = ["monkey", "horse", "dog"];
console.log(animals);
animals.sort();
console.log(animals);
animals.unshift("cat");
console.log(animals);

let fruits = ("mango/cherries/kiwi/grape/pear/peach/orange/lemon");
console.log(fruits);
document.write("mango" + "<br>" + "cherries" + "<br>" + "kiwi" + "<br>" + "grape" + "<br>" + "grape" + "<br>" + "paer" + "<br>" + "peach" + "<br>" + "orange" + "<br>" + "lemon");

                                                        // Advanced 0ne
var a = 7;

var b = 14;

var c = "21";
c=Number('21');

var d = '36';
d=Number('36');

var e = 42;

var result = a+b+c+d+e;
console.log(result);
                                                      // Advanced
var f = '1';

f=Number('1');
var g = 15;

var h = 8;

var i = "1";
i=Number('1');

var resultTwo = f*g*h*i;
console.log(resultTwo);
bothResult= result/resultTwo;
document.write(bothResult);

//    Advanced 2

let Arry = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 25, 7],
  [21, 4, 6, 17],
  [3, 5, 26, 3],
];
console.log(Arry[1][1], Arry[4][2], Arry[5][3], Arry[2][1]);


//  Challenge one
var array_7 = [['Viena'], ['is'], ['a'], ['nice'], ['city']]
w7 = array_7.shift(0);
console.log(w7)
w8 = array_7.shift(1);
console.log("\t",w8)
w9 = array_7.shift(2);
console.log("\t\t",w9)
w10 = array_7.shift(3);
console.log("\t\t\t",w10)
w11 = array_7.shift(4);
console.log("\t\t\t\t",w11)



        //    Method two
console.log("METHOD TWO:")
console.log((w7), "\n\t",w8, "\n\t\t",w9,"\n\t\t\t",w10, "\n\t\t\t\t",w11)
document.write(resultSentence);


// challange two
let text2 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
  let temp = new Array();
  temp = text2.split('$');
  document.write(temp);

// extra exercise
let text3="Hey there, i am a javascript developer, and i live in vienna";
console.log(text3.substring(10,38)+".");

    //   Method Two
// let text3 = "Hey there, i am a javascript developer, and i live in vienna";
// console.log(text = "I am a javascript Developer.");


// extra exercise Two
let text4=['apple', 'banana', 'kiwi'];
text4.splice(2,0,'orange','strawberry');
console.log(text4);

