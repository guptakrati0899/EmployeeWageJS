const partTime = 1;
const fullTime= 2;
const partTimeHrs = 4;
const fullTimeHrs = 8;
const WagePerHour= 20;

let empHrs = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck) {
    case partTime:
        empHrs = partTimeHrs;
        console.log("Employee is Part time Present")
        break;
    
    case fullTime:
        empHrs = fullTimeHrs;
        console.log("Employee is fulltime present")
        break;
    
        default:
            empHrs = 0;
            console.log("Employee is absent")
}
let empWage = empHrs * WagePerHour;
console.log("Employee wage: "+empWage);