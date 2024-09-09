# student_dataCalculator
Assignment two from Techy Jaunt back-end class.

Student Data Manager
Welcome to my Student Data Manager project! 🎓✨ This project allows you to filter students based on their grades and calculate the average age of students in a simple way.

How It Works
Filter by Grade: You can filter out students based on their grade. For instance, you can see which students got an "A" or "B".
Average Age Calculator: This function helps calculate the average age of all the students in the data list.
Features
FilterByGrade Function: Pass in a grade (like "A", "B", "C", etc.) and it returns a list of students who scored that grade. 
AverageAge Function: It calculates and returns the average age of all the students in the dataset. 
Example
Here’s how to use the functions I created:

Filter by Grade
const students = filterByGrade(studentData, "A");
console.log(students);
This will return students who have a grade of "A".

Calculate Average Age
const average = averageAge();
console.log(average);
This will return the average age of all students in the dataset.

Testing the Functions
You can easily test the functions by running the example code in a JavaScript environment like Node. Below is a quick test for filtering by grade and calculating average age:

console.log(filterByGrade(studentData, "A")); // Returns students with "A" grade
console.log(filterByGrade(studentData, "B")); // Returns students with "B" grade
console.log(averageAge()); // Returns the average age of all students
What's Next?
I'll be expanding on this to add even more features like sorting students by age or adding new student entries!🚀


