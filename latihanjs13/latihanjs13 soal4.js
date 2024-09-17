function simulateTask(){
    return new Promise((resolve, reject) => {
        if(setTimeout < 2000){
            resolve("task complete");
        }else if(setTimeout > 2000){
            reject("task failed");
        }
        }, 2000)
}
simulateTask()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("task completed"))