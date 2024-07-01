const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const mark = parseInt(prompt("What is your mark? "), 10);

function gradeGenerator(mark) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
        return "Invalid Mark!!";
    } else if (mark > 79) {
        return "Grade: A";
    } else if (mark >= 60 && mark <= 79) {
        return "Grade: B";
    } else if (mark >= 49 && mark <= 59) {
        return "Grade: C";
    } else if (mark >= 40 && mark <= 48) {
        return "Grade: D";
    } else if (mark < 40) {
        return "Grade: E";
    }
}

console.log(gradeGenerator(mark));
