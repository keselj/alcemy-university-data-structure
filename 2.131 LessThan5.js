// Given an array of elements, find the elements whose value is less than 5. Return the resulting array

function lessThanFive(array) {
    return array.filter(function(el){
        return (el < 5);
    });
    
}