// Given an array of strings, sort the strings in descending order ('c','b','a'...) and return the resulting sorted array.

function sortStringsDown(array) {
    array.sort(function (a, b){
        return b.localeCompare(a);
    })
    
}