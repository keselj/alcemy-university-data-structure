// Let's make factorial work for every positive integer!

function factorial(n) {
    if ( n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}