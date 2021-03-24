const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;       
    }
}

function getEmpDailyWage(totalEmpHrs){
    return totalEmpHrs*WAGE_PER_HOUR;
}


let count = 0;


//
count=0;
 const showDailyWages=(dailyWage)=>{
     count++;
    return count+" - "+dailyWage;
}

let dailyWagesMapArr=empDailyWageArr.map(showDailyWages);
console.log('dailyWagesMapArr',dailyWagesMapArr);

//max wage 160
const showWageMax=(dailyWage)=>{
    return dailyWage.includes("160");
}

let showMaxWages=dailyWagesMapArr.filter(showWageMax)
console.log(showMaxWages);

//full wage time earned first occurenace
const showFullWageEarned=(dailyWage)=>{
   return dailyWage.includes("160");
}


let fullWageEarned=dailyWagesMapArr.find(showFullWageEarned);
console.log(fullWageEarned);

//check showMaxWage truely holding the maximum wages
const allMaxWages=(maxWage)=>{
   return maxWage.includes("160");
}
let resultMaxWage=showMaxWages.every(allMaxWages)
console.log(resultMaxWage);
//minimum
count1=0;
const showAllWages=(dailyWage)=>{
    count1++;
    return count1+" - "+dailyWage;
}

let showNewDailyWages=empDailyWageArr.map(showAllWages);
console.log(showNewDailyWages);
//min wage
const showMinWages=(allWages)=>{
    return allWages.includes("80");
}

let minWageArr=showNewDailyWages.filter(showMinWages);
console.log(minWageArr);

//first min wage 
const findFirstAccurence=(minWages)=>{
    return minWages.includes("80");
}

let resultMinWage=minWageArr.find(findFirstAccurence);
console.log(resultMinWage);

//find all are minimum
const checkMinimumWages=(minWage)=>{
    return minWage.includes("80");
}

let checkMinWage=minWageArr.every(checkMinimumWages);
console.log(checkMinWage);

//some contains min wage
let checkMin=showNewDailyWages.some(checkMinimumWages);
console.log(checkMin);

//number of days employee workedd

const findWorkingDays=(workingDays,day)=>{
    console.log(day,' day')
   if(day>0) workingDays++; 
   return workingDays;
}
let totalDays=empDailyWageArr.reduce(findWorkingDays,0);
console.log('totalWorkingDays',totalDays);

//UC_8

let  totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr=new Array();


 function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;       
    }
}

const calcDailyWage=(empHrs)=>{
    return empHrs*WAGE_PER_HOUR;
}

while(totalEmpHrs<=MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage:calcDailyWage(empHrs),
                toString(){
                    return '\nDay  ' +this.dayNum +' => working Hours is '+this.dailyHours+
                    '  And Wage Earned = '+this.dailyWage
                },
            });
    }

    let empWage=calcDailyWage(totalEmpHrs)

    console.log(empDailyWageMap);
    function totalWages(totalWage, dailyWage){
        return totalWage+dailyWage;
    }

    console.log("UC_8A - Emp Wage Map total Hrs : ",
    Array.from(empDailyWageMap.values()).reduce(totalWages,0));

    //UC_9
const findTotal = (totalVal, dailyVal)=>{
return totalVal + dailyVal;
}

count = 0;
{
// totalHours = Array
//                 .from(empDailyHrsMap.values())
//                 .reduce(findTotal, 0);
// totalSalary = empDailyWageArr
//                 . filter(dailyWage => dailyWage > 0)
//                 .reduce(findTotal,0);

// console. log("UC9A - Emp Wage with Arrow.: " + " Total Hours:"+
                    // totalHours + " Total Wages:" + totalSalary);
}
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
{
// empDailyHrsMap.forEach( (value, key, map) => {
//      if (value == 8) fullWorkingDays.push(key);
//     else if (value == 4) partWorkingDays.push(key); 
//     else nonWorkingDays.push(key);
//  });
}
console. log("Full Working Days: "+fullWorkingDays);
console. log("Part Working Days: "+partWorkingDays);
console. log("Non Working Days: "+nonWorkingDays);
//UC_10 : Objects

console.log("UC_10 showing daily hours worked and wage earned : "+empDailyHrsAndWageArr);

//UC 11A to UC 11D Using Object function along with Arrow Function

let totalWages1=empDailyHrsAndWageArr
                .filter(empDailyWage => empDailyWage.dailyWage>0)
                .reduce((a,b)=>a=a+b.dailyWage,0);
let totalHours=empDailyHrsAndWageArr
                .filter(a=>a.dailyHours>0)
                .reduce((a,b)=>a=a+b.dailyHours,0);
console.log("UC 11A total hours ",totalHours," total Wages : ",totalWages1);

process.stdout.write(" UC 11B Logging Full work Days ")

empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours ==8)
                        .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));
let partWorkingDayStrArr=empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                        .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC 11c partworkingDayStirng: "+partWorkingDayStrArr);
 
let nonWorkingDayNums=empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log(" UC 11D non Working nums : ", nonWorkingDayNums);
            