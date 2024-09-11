function printEverySecond(){
    let i = 0;
    const time = setInterval(() => {
        console.log("Hello World");
        i++;
        if (i >= 5000) {
            clearInterval(time);
        }
    },  1000);  
}

printEverySecond()