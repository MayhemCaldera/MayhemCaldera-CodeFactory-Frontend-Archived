// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     let max = 5;
//     if (i > max) {
//         max = i;
//     }
//     console.log(max);
// }

const array = [-5, -5, 10, 37, 15, -15]

const forLoopMinMax = () => {
    let min = array[0],
        max = array[0]

    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        min = (value < min) ? value : min
        max = (value > max) ? value : max
    }

    return [min, max]

}
console.log(forLoopMinMax());