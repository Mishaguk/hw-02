'use strict'
const checkForSpam = function (message) {
    let text = message.toLowerCase();
    let spam = message.includes('sale');
    let spam1 = message.includes('SPAM')
    console.log(spam, spam1);  
   
   
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

 console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
  