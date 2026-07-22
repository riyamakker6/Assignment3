// Student Array
const students = [
    { id: 101, name: "Aman", marks: 82, course: "Java" },
    { id: 102, name: "Priya", marks: 95, course: "Python" },
    { id: 103, name: "Rahul", marks: 67, course: "Java" },
    { id: 104, name: "Neha", marks: 76, course: "Web" },
    { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

console.log("Task 1 - Add Student (push)");

students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

console.log(students);

console.log("\nTask 2 - Remove Last Student (pop)");

const removedLast = students.pop();
console.log(removedLast);

console.log("\nTask 3 - Add Student at Beginning (unshift)");

students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web"
});

console.log(students);

console.log("\nTask 4 - Remove First Student (shift)");

const removedFirst = students.shift();
console.log(removedFirst);

console.log("\nTask 5 - Update Array Using splice()");

// Find the index of student with id = 103
const index = students.findIndex(student => student.id === 103);

// Replace Rahul with Karan
students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log(students);

console.log("\nTask 6 - Create New Array Using slice()");

const firstThree = students.slice(0, 3);
console.log(firstThree);

console.log("\nTask 7 - for...of");

for (const student of students) {
    console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

console.log("\nTask 8 - forEach()");

students.forEach(student => {
    console.log(student.name);
});

console.log("\nTask 9 - map()");

const studentNames = students.map(student => student.name);
console.log(studentNames);

console.log("\nTask 10 - filter()");

const topStudents = students.filter(student => student.marks >= 80);
console.log(topStudents);

console.log("\nTask 11 - reduce()");

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("Total Marks =", totalMarks);

const averageMarks = totalMarks / students.length;
console.log("Average Marks =", averageMarks);

console.log("\nTask 12 - sort()");

const ascending = [...students].sort((a, b) => a.marks - b.marks);

console.log("Ascending Order:");
ascending.forEach(student => console.log(student.marks));

const descending = [...students].sort((a, b) => b.marks - a.marks);

console.log("Descending Order:");
descending.forEach(student => console.log(student.marks));