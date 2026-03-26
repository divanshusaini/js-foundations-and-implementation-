function calculateTenPercent(salary){
    return salary*0.1;
}

function calculateTax(salary,cb){
    let res=[];
    for(let i=0;i<salary.length;i++ ){
        res.push(cb(salary[i]));
    }
    return res;
}

let arr=[1,2,4];

let res=arr.map((el)=>{
el*2; 
});