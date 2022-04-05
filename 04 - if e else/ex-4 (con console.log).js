// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calculateSalary(role) {
  if(role == 'ceo'){
    console.log(2200);
  }else if(role == 'manager' || role == 'cto'){
    console.log(1800);
  }else if(role == 'developer'){
    console.log(1500);
  }else{
    console.log(1000);
  }
}

calculateSalary('ceo')
calculateSalary('manager')
calculateSalary('cto')
calculateSalary('developer')
calculateSalary('random work')