//Question 2
// Program to Check Whether a Number is Palindrome or Not.If the number is palindrome print true else print false.

const express = require('express')
const readline = require('readline');

const app = express()
const PORT = 8080

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(number) {
    const numStr = number.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

rl.question('Enter a number to check if it is a palindrome: ', (input) => {
    const num = input.trim();
    if (!isNaN(num) && num !== '') {
        const result = isPalindrome(num);
        console.log(result);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
})


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} Port`)
})
