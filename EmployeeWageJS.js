//constants
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
//variables
let totalEmpHrs=0;
let totalWorkingDays=0;
//employee wage array
let empDailyWageArr=new Array();
//employee wage map
let empDailyWageMap = new Map();
//employee daily hour map
let empDailyHourMap = new Map();
//Array to hold emphrs , daily wage
let empDailyHrsAndWageArr = new Array();
//employee wage calculation using working hours
function CalculateDailyWage(empHrs)
{
  return empHrs*WAGE_PER_HOUR;
}
//get daily working hours 
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
   }
}
//Adding daily employee wage to an array
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random()*10)%3;
  let empHrs = GetWorkingHours(empCheck);
  totalEmpHrs+=empHrs;
  empDailyWageArr.push(CalculateDailyWage(empHrs));
  empDailyWageMap.set(totalWorkingDays, CalculateDailyWage(empHrs));
  empDailyHourMap.set(totalWorkingDays, empHrs);
  empDailyHrsAndWageArr.push
  (
    {
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: CalculateDailyWage(empHrs),
        toString()
        {
            return '\nDay '+ this.dayNum+' => Working Hours is ' +this.dailyHours+' And wage earned = '+this.dailyWage;
        }
    }
);
}
//Total wage calculation
let empWage=CalculateDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
 //Total employee wage calculation using array foreach
let totalEmpWage=0;
function sum(dailyWage)
{
  totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);
//Total wage using reduce method of array
function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}
console.log("UC7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
//Array map helper function used
let dailyCounter=0;
function mapDayWithWage(dailyWage)
{
   dailyCounter++;
   return dailyCounter+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
//Shows Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
//Find the first occurence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));
//Check if Every Element of Full Time Wage is truely holding Full time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Elements have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));
//Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
//Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));
//UC8 Store day and daily wage in a map
let totalWageFromMap = 0;
for(let empWage of empDailyWageMap.values())
{
    totalWageFromMap+=empWage;
}
//printing map
console.log(empDailyWageMap);
console.log("UC8: total emp wage from map: "+ totalWageFromMap);
//UC9 A  total hours and wage using Arrow Functions
const findTotal= (totalVal,dailyVal)=>{
  return totalVal+dailyVal;
}
let totalHours = Array.from(empDailyHourMap.values()).filter(dailyHours=>dailyHours>0).reduce(findTotal, 0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);  
console.log("UC 9A Emp wage with Arrow."+ " Total Hours: " + totalHours + " Total Wage: " + totalSalary);
//UC 9B No of fulltime, parttime and absent days
let noWorkingDays= new Array();
let partWorkingDays= new Array();
let fullWorkingDays= new Array();
empDailyHourMap.forEach((value,key)=>{
  if(value==8) fullWorkingDays.push(key);
  else if(value==4) partWorkingDays.push(key);
  else noWorkingDays.push(key);
});
console.log("Full Working Days: "+ fullWorkingDays);
console.log("Part time working days: "+partWorkingDays);
console.log("Non Working Days: "+noWorkingDays);
//UC10
console.log("UC10- Showing daily hours and wage earned");
console.log(empDailyHrsAndWageArr.toString());
//UC11A
let totalempWage = empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0).reduce((totalWage,dailyHrsAndWage)=>totalWage=totalWage+dailyHrsAndWage.dailyWage,0);
let totalHrs = empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours>0).reduce((totalWage,dailyHrsAndWage)=>totalWage=totalWage+dailyHrsAndWage.dailyHours,0);
console.log("UC 11A Total hours: "+ totalHrs +" Total Wages: "+ totalempWage);
//UC11B
process.stdout.write("UC11B Logging full work days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()))
//UC 11C
let partWorkDaysStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                         .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log(" UC 11C- PartWorkingDaysStrings: " + partWorkDaysStrArr);
//UC 11D
let noWorkDaysNumArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                         .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
                         
console.log("UC 11D- NoWorkingDaysNumber: " + noWorkDaysNumArr);