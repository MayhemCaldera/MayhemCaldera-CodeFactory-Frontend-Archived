// Find the Biggest Number using the math method
function findTheBiggestNumber() {
    let a= Math.max(1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7);
    }
console.log(a);


// Find the biggest number-regular way with and "if" and "else" condition
// Using the divide and conquer method
// Using String insteag of integer
let input = ['1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7'];

let a = (+gets);
let b = (+gets);
let c = (+gets);

if (a >= b && a >= c) {
    max = a;
    if (b >= c) {
        mid = b;
        min = c;
    } else { 
        mid = c;
        min = b;
    }
} else if (b >= a && b >= c) {
    max = b;
    if (c >= a) {
        mid = c;
        min = a;
    }  else {
        mid = a;
        min = c;
    }
} else if (c >= a && c >= b) {
    max = c; 
    if (b >= a) {
        mid = b; 
        min = a; 
    } else {
        mid = a; 
        min = b; 
    }
}
print(`${max} ${mid} ${min}`);

print(max + ' ' + mid + ' ' + min)

