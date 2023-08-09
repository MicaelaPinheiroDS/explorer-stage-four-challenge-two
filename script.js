const students = [
    {
        name:'matheus',
        firstTestScore: 6,
        secondTestScore: 8,
        average: ''
    }, 
    {
        name:'diego',
        firstTestScore: 4,
        secondTestScore: 8,
        average: ''
    }, 
    {
        name:'micaela',
        firstTestScore: 7,
        secondTestScore: 9,
        average: ''
    }, 
    {
        name:'carol',
        firstTestScore: 6,
        secondTestScore: 6,
        average: ''
    }
]

function calcAverage () {
    for(student in students){
         students[student].average = (students[student].firstTestScore + students[student].secondTestScore) / 2
    }
}
calcAverage()

for(student in students){
    if(students[student].average >= 7){
        alert(`The average of student ${students[student].name} is ${students[student].average}. \n congratulations ${students[student].name} you were approved in the contest`)
    } else {
        alert(`The average of student ${students[student].name} is ${students[student].average}. \n not this time ${students[student].name} , try again`)
    }
}