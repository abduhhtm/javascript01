async function calculataDefision(a, b) {
    try {
        if (b === 0) {
            throw new Error("pembagi tdk boleh 0");
        }
        const result = await new promise((resolve, reject) => {
            resolve(a / b);
        }, 2000);
        console.log(`hasil pembagian: ${result}`);
        
    } catch (error) {
        console.log(error);
    }  
}