export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const newStudentGrade = studentsByCity.map((student) => {
    newGrades.map((grade) => {
        if (student.id === grade.id){
            student.grade = grade.grade;
        } else if(student.id !== grade.id){
            student.grade = "N/A"
        }
    })
  })
}