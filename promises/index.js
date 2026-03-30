// //Promises


// console.log("hello promises");

// const result= fetch("https://api.github.com/users");

// const ans = result.then((Response)=>{
//    return  Response.json();
    
// });
// ans.then((Response)=>{
// console.log(Response);
// })
 

//Promise chaining

fetch("https://api.github.com/users")
.then((response)=>{
       return response.json();
})
.then((data)=>{
 console.log(data);
 
});

