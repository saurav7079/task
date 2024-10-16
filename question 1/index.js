//Question 1
////Reverse the digit of an integer

const express = require('express')
const readline = require('readline');

const app = express()
const PORT = 8080

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseDigits(number) {
    const reversedNumber = number.toString().split('').reverse().join('');
    return parseInt(reversedNumber, 10);
}

rl.question('Enter a number to reverse its digits: ', (input) => {
    const num = parseInt(input, 10);
    if (!isNaN(num)) {
        const reversed = reverseDigits(num);
        console.log(`Original number: ${num}, Reversed number: ${reversed}`);
    } else {
        console.log('Please enter a valid number.');
    }
    rl.close();
});



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} Port`)
})
