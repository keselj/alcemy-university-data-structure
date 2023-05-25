// Given an array of numbers, 
// sort the numbers ascending (1,2,3...) and return the sorted array.

function sortUp(array) {
    return array.sort(function comparison(a, b){
        return a - b;
    });
}
