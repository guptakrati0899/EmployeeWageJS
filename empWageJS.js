const partTime = 1;
const fullTime = 2;
const partTimeHrs = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const workingDays = 20;
const maxHrsMonth= 160;

function getEmpWorkingHrs(empCheck) {
    switch(empCheck) {
        case partTime:
            return partTimeHrs;
    
        case fullTime:
            return fullTimeHours;
    
            default:
                return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= maxHrsMonth &&
        totalWorkingDays < workingDays) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getEmpWorkingHrs(empCheck);
}
let empWage = totalEmpHrs * wagePerHour;
console.log("Total Working Days: "+totalWorkingDays +" Employee Total Working Hours: "+totalEmpHrs +" Employee wage: "+empWage);