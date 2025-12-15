// create a new type to control the property of the student and the Course
// Tstudent = Type Student, Tcourse = Type Course
type Tstudent = {
    id: number,
    name: string,
    email?: string,
    isPremium: boolean,
    contact?: string|number
}
type Tcourse ={
    courseId: number,
    title: string,
    price: number,
    students: Tstudent[]
}
const student1: Tstudent = {
    id: 1,
    name: "Bui Duc Huy",
    isPremium: true
}
const student2: Tstudent = {
    id: 2,
    name: "Nguyen Van An",
    isPremium: false
}
const English:Tcourse = {
    courseId: 1,
    title:"Học tiếng anh",
    price:5000,
    students: []
}
const registerStudentToCourse = (student: Tstudent, course:Tcourse) :boolean=>{
    const isExist = course.students.some(std =>std.id === student.id)
    if(isExist){
        return false
    }
    course.students.push(student)
    return true

}
const printCourseInfo = (course: Tcourse):void =>{
    if(course.students.length == 0){
        console.log("Danh sách trống");
        return
    }
    const studentList = course.students.map(std =>std.name)
    console.log(studentList.join(","));
    
}
registerStudentToCourse(student1,English)
registerStudentToCourse(student2,English)
printCourseInfo(English)