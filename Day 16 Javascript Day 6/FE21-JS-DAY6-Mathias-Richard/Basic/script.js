sandwiches = JSON.parse(sandwiches);
console.log(sandwiches);
fries = JSON.parse(fries);
console.log(fries);


document.write(`My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`)