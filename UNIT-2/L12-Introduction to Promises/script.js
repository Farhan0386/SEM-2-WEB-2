console.log("Introduction to Promises");
const p=new Promise((resolve,reject)=>{
    let done=false;
    setTimeout(()=>{
        if(done){
            resolve("work is done");
        } else {
            reject("work is not done");
        }   
    },5000);
});

console.log(p);
p.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise is settled");
}); 
