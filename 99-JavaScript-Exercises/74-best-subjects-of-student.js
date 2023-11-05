// Print out a student’s best subjects.
function printStudentBestSubjects(student) {
    let max = 0;
    student.subjects.forEach(subject => {
        if (subject.mark > max) {
            max = subject.mark;

        }
    })
    student.subjects.forEach(materie =>{
        if(materie.mark === max)
        {
            console.log(materie.title)
        }
    })
}

printStudentBestSubjects({
    name: 'Robert',
    age: 20,
    subjects: [
        {title: 'Programming I', mark: 9},
        {title: 'Programming Project', mark: 10},
        {title: 'Mobile applications', mark: 10},
    ]
})
/* Expected output:
Programming Project
Mobile applications
*/
