// We can apply the same filtering logic to booleans.

// Given an array of booleans, keep only the true values:

// Return the resulting array

function onlyTrue(array) {
    return array.filter(function(a){
        return a === true;
    })    
}