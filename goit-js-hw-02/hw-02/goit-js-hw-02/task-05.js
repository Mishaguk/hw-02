'use strict'
const checkForSpam = function (message) {
    const spam = message.split('sale')
    if (spam = message) {
        
    }
    console.log(spam)
   
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true