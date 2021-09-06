const partTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WagePerHour = 20;
const WorkingDays = 20;

function getEmpWorkingHrs(empCheck) {
    switch(empCheck) {
        case partTime:
            return PartTimeHours;
    
        case FullTime:
            return FullTimeHours;
    
            default:
                return 0;
    }
}

let totalEmpHrs = 0;
for (day = 0; day < WorkingDays; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getEmpWorkingHrs(empCheck);
}
let empWage = totalEmpHrs * WagePerHour;
console.log("Employee Total Working Hours: "+totalEmpHrs +"   Employee wage: "+empWage);