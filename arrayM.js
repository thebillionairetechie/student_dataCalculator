const student1= {
    name : "Stella",
    age : 7,
    grade : "A"
};
const student2 = {
    name : "Ahavah",
    age : 6,
    grade : "B"
};
const student3 = {
    name : "Zeke",
    age : 8,
    grade : "A"
};
const student4 = {
    name : "Rhema",
    age : 10,
    grade : "C"
};
const student5 = {
    name : "Azaiah",
    age : 9,
    grade : "D"
};
studentData = [student1, student2, student3, student4, student5]
 const filterByGrade = (studentData, grade)=>{
      return studentData.filter(student => student.grade == grade);
 };
 
//  Testing the function
console.log(filterByGrade(studentData, "A"));
console.log(filterByGrade(studentData, "B"));

const averageAge = () =>{
    let totalAge = studentData.reduce((total, student)=> total + student.age, 0)
    return totalAge/ studentData.length;
}
console.log(averageAge())