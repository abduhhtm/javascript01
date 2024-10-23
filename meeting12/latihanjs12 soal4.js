function PerformTasks(){
    console.log("tugas 1");
    
    setTimeout(()=> {
        console.log("tugas 2");  
    }, 1000);

    setTimeout(()=> {
        console.log("tugas 3");
        
    }, 3000)

}

PerformTasks()