//Function to Find Out Highest Paid Employee.
function HighestPaid(Employees){
  let highpaid=0;
  let HighestPaidemployee=null;

  //For loop to iterate Array of Employee
  for(let i=0;i<Employees.length;i++){
    if(Number(Employees[i].salary>highpaid )){
      highpaid=Number(Employees[i].salary)
      HighestPaidemployee=Employees[i]
    }
  }
  //returning the Highest Paid Employee Information.
  return(HighestPaidemployee)
}

//Input taking of an Array of Employees
const Employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  //Calling the HighestPaid Function to Print The Highest Paid Employee.
  const array=HighestPaid(Employees)
  console.log (array)

  //Function to Swap Object in the Array.
  function destructuringToSwap(Employee){
    //
    let firstEmployee=Employee[0];

    //Swaping Object in the Array.
    Employee[0]=Employee[2]
    Employee[2]=firstEmployee;

    //returning the Swapped Array.
    return(Employee)
  }

  //Taking Input of an Array of Object/Employees Information.
  const Employee = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  //Calling the Function to Print the Swapped Array/Employees Information.
  let arr=destructuringToSwap(Employee)
  console.log(arr)
  