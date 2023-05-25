// Given an array of values, return an array of unique values.

function unique(array) {
    return array.filter(function(el,i){
        return array.indexOf(el) === i;
    })
}