async function simulateDelay() {
    console.log("Waiting for 2 seconds");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("awaiting finised");
        }, 2000);    
      })
    
}

simulateDelay()
