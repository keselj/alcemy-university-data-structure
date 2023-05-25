// Given an array of numbers sort them in descending order and return the array.

function sortDown(array) {
    return array.sort(function comparison(a, b){
        return b - a;
    });
}

