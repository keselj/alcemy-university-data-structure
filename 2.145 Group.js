// Finish the function group. Sort each food by it's type and return an object in the format shown above.

// Don't depend on the types to only be "fruit" and "vegetable". 
// We will be testing for additional food types in the test cases, so no hardcoding string values!

// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue.type] === undefined){
            accumulator[currentValue.type] = [currentValue.food];
    
        }
        else {
            accumulator[currentValue.type].push(currentValue.food)
        }

    return accumulator;
    }, {} );
}