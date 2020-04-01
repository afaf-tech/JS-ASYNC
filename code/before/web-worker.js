function shoqLog(total){
    for(let i =0; i< total; i++){
        console.log(i)
    }
}


addEventListener("message", function(event){
    const total = event.data;
    shoqLog(total);
    postMessage("Done");
})