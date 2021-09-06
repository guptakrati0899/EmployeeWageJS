const partTime = 1;
const fullTime = 2;
const partTimeHrs = 4;
const fullTimeHrs = 8;
const wagePerHour= 20;

function getEmpWorkingHrs(empCheck) {
    switch(empCheck) {
        case partTime:
            return partTimeHrs;
    
        case fullTime:
            return fullTimeHrs;
    
            default:
                return 0;
    }
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getEmpWorkingHrs(empCheck);
let empWage = empHrs * wagePerHour;
console.log("Employee wage: "+empWage);