function multiply(z, y) {
    return z * y;
}   

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}

export { multiply as kali, divide as bagi};

// as = alias