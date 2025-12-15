"use strict";
const student1 = {
    id: 1,
    name: "Bui Duc Huy",
    isPremium: true
};
const student2 = {
    id: 2,
    name: "Nguyen Van An",
    isPremium: false
};
const English = {
    courseId: 1,
    title: "Học tiếng anh",
    price: 5000,
    students: []
};
const registerStudentToCourse = (student, course) => {
    const isExist = course.students.some(std => std.id === student.id);
    if (isExist) {
        return false;
    }
    course.students.push(student);
    return true;
};
const printCourseInfo = (course) => {
    if (course.students.length == 0) {
        console.log("Danh sách trống");
        return;
    }
    const studentList = course.students.map(std => std.name);
    console.log(studentList.join(","));
};
registerStudentToCourse(student1, English);
registerStudentToCourse(student2, English);
printCourseInfo(English);
