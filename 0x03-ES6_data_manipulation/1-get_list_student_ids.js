export default function getListStudentIds(students) {
  const ids = [];
  if (Array.isArray(students)) {
    ids.push(students.map((student) => student.id));
  } else {
    return [];
  }
}
