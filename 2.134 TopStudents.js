// Find students whose score is at least 90.

function topStudents(array) {
    return array.filter(function(student){
        return student.grade >= 90
    });
}