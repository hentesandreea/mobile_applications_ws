// Sort students by GPA and after that by name.
function getSortedStudents(students) {
    return students.sort((el1, el2) => {
            if (el1.gpa !== el2.gpa) {
                return el2.gpa - el1.gpa

            }else{
                if( el1.name < el2.name ) {
                    return -1;
                }
                return 1;
            }
        } // <- functie care returneaza un numar, daca diff este cu minus se schimba
    )
}


const sorted = getSortedStudents([
    { name: 'Alice', gpa: 4.8 },
    { name: 'Bob', gpa: 5 },
    { name: 'Stan', gpa: 4.7 },
    { name: 'Seraphine', gpa: 4.7 }
])
sorted.forEach(({ name }) => console.log(name))
/* Expected output:
Bob
Alice
Seraphine
Stan
*/
