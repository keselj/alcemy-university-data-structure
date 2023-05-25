// Take the array arr and add one to every element, return the resulting array.

function plusOne(arr) {
    let result = arr.map(function(x) {
        return x + 1;
    })
    return result;
    
}

module.exports = plusOne;