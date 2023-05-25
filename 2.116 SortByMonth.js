// Given the array of events, sort them by the month that they occur in and return the sorted array.

// Each object in the events array will have properties event and month just like in the example shown above.

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    return events.sort(function comparison(a,b){
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month );
    });
    
    
}