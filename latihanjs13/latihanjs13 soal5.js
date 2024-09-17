function fetchDataA(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data a");  
        }, 1000);      
    })
}

function fetchDataB(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data b");  
        }, 2000);      
    })
}

Promise.all([fetchDataA(), fetchDataB()])
  .then((result) => console.log(result));