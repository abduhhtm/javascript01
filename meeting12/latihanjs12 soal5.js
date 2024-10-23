function delayedMessage(massage, delay) {
    setTimeout(() => {
        console.log(massage);
        
    }, delay);
    
}

delayedMessage("Hello after delay", 2000)