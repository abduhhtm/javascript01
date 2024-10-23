function helloword() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!")
        }, 2000)
    })
}

async function messages() {
    try{
        const msg = await helloword();
        console.log(msg);
    }  catch (error) {
        console.log(error);
    }
}

messages();