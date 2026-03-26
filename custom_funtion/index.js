//custom functions
let salary =[1000,2000,3000,4000];
function calculateTenPercent(salary){
   return salary*0.1;
}

function calculateTwentyPercent(salary){
   return salary*0.2;
}

function calculateTax(salary,cb){   
    let res=[];
    for(let i=0;i<salary.length;i++){
      res.push(cb(salary[i]));
    }
    return res;
}
 console.log(calculateTax(salary,calculateTenPercent));
 
