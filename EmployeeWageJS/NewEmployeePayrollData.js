class EmployeePayrollData{
    //property


//constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
//getter and setter method
get name() {
     return this._name;
    }
set name(name){
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name)) {
         this._name=name;
        }
    else throw 'Name is Incorrect';
}

get id(){
    return this._id;
}
set id(id){
    let idRegex=RegExp('^[1-9][0-9]*$')
    if(idRegex.test(id)){
        this._id=id;
    }
    else throw 'Id is Incorrect';
}

get salary(){ return this._salary;}

set salary(salary){
    let salaryRegex=RegExp('^[1-9][0-9]*$')
    if(salaryRegex.test(salary)){
        this._salary=salary;
    }
    else throw 'salary is Incorrect';
}

get gender(){
    return this._gender;
}

set gender(gender){
    let genderRegex=RegExp('^(?:M|F)$')
    if(genderRegex.test(gender)){
        return this._gender=gender;
    }
    else throw 'gender is Incorrect';
}

// get startDate(){
//     return this._startDate;
// }

// set startDate(date){
//     if(date===Date()){
//         this._date=date;
//     }
//     else{
//         return 'date is Incorrect';
//     }
// }

//method
toString(){
    const options={year: 'numeric ',month: 'long',day:'numeric'};
    const empDate=!this.startDate?"unidefined":
    this.startDate.toLocalDateString("en-US",options);
      return "id = "+this.id+" , name= "+this._name+" , salary = "
      +this.salary+
      " , "+"gender = "+this.gender +" , startDate= "+empDate;
}

}

let employeePayrollData =new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.id=0;

try{
    employeePayrollData.name="john";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",30000,"M",new Date());
console.log(newEmployeePayrollData);

//UC_14

try{
    employeePayrollData.id=0;
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmployeePayrollData1=new EmployeePayrollData(1,"Terrisa",30000,"male",new Date());
console.log(newEmployeePayrollData1);

try{
    employeePayrollData.gender="male";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmployeePayrollData2=new EmployeePayrollData(1,"terrisa",30000,"M",new Date());
console.log(newEmployeePayrollData2);

try{
    employeePayrollData.salary=0;
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmployeePayrollData3=new EmployeePayrollData(0,"Terrisa",0,"m",new Date());
console.log(newEmployeePayrollData3);
