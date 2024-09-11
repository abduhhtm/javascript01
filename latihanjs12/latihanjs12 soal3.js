function greeter(nama, callback) {
    console.log("Hello " + nama);
    callback(nama);
    setTimeout(() => {

    }, 2000);
    
}

function sayGoodbye() {
    console.log("Goodbye");
}

greeter("abduh", sayGoodbye);