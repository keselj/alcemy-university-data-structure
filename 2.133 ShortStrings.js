// Given an array of strings, keep only the strings whose length is at most 3.

function shortStrings(array) {
    return array.filter(function(str){
        return str.length <= 3;
    })
}