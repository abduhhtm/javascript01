const number = [3,7,1,6];
function cheknumber() {
    return new Promise((resolve, reject) => {
        if (number[1] > 5) {
            resolve("Number is greater than 5");
        } else if (number[1] < 5) {
            reject("Number is less than 5");

        }
    });
}
cheknumber()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
    