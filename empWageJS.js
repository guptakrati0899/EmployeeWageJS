const maxHours = 160;
const workingDays = 20;
const partTime = 1;
const fullTime = 2;
const partTimeHrs = 4;
const fullTimeHrs = 8;
const wagePerHour = 20;

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

function calcEmpDailyWage(empHrs) {
    return empHrs * wagePerHour;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= maxHours &&
        totalWorkingDays < workingDays) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            let empHrs = getEmpWorkingHrs(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calcEmpDailyWage(empHrs));
}
let empWage = calcEmpDailyWage(totalEmpHrs);
console.log("Monthly Working Hours:  " + empDailyWageArr)
console.log("Total Working Days: "+totalWorkingDays +"     Total Working Hours: "+totalEmpHrs +"      Employee Wage: "+empWage);