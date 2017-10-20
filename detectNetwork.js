// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var digits2 = Number(cardNumber.slice(0,2));
  var digits4 = Number(cardNumber.slice(0,4));
  var digits3 = Number(cardNumber.slice(0,3));
  var digits6 = Number(cardNumber.slice(0,6));

  if((digits2 === 38 || digits2 === 39) && (cardNumber.length === 14)){
  	return "Diner's Club";
  } else if((digits2 === 34 || digits2 === 37) && (cardNumber.length === 15)){
  	return "American Express";
  } else if((digits2 === 51 || digits2 === 52 || digits2 === 53 || digits2 === 54 || digits2 === 55) && (cardNumber.length === 16)){
  	return "MasterCard";
  } else if((digits2 === 65 || digits4 === 6011 || (digits3 >= 644 && digits3 <= 649)) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return "Discover";
  } else if((digits4 === 5018 || digits4 === 5020 || digits4 === 5038 || digits4 === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return "Maestro";
  } else if(((digits6 >= 622126 && digits6 <= 622925) || (digits3 >=624 && digits3 <=626) || (digits4 >= 6282 && digits4 <=6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return "China UnionPay";
  } else if((digits4 === 4903 || digits4 === 4905 || digits4 === 4911 || digits4 === 4936 || digits4 === 6333 || digits4 === 6759 || digits6 === 564182 || digits6 === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return "Switch";
  } else if((cardNumber.charAt(0) === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return "Visa";
  }


};



