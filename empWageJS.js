const empAbsent = 0

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == empAbsent) {
    console.log("Employee is Absent.");
} else {
    console.log("Employee is Present.");
}