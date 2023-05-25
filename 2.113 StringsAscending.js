// Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.

function sortStringsUp(array) {
    array.sort(function(a, b){
        return a.localeCompare(b);
    })
    
}

