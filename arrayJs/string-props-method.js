const number1 = [ 10, 20, 30];
const number2 = [20,30,40];
const number3 = [30,50,100];

function calc (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}
 
// Sum three arrays or values.....
const tatalNumber = calc(number1) + calc(number2) + calc(number3);
console.log(tatalNumber);