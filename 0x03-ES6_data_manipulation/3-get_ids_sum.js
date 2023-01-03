export default function getStudentIdsSum(students) {
  const ids = [];
  students.map((student) => ids.push(student.id));
  const idsSum = ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );
  return idsSum;
}