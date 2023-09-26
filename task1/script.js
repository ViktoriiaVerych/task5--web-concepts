// Write a function concatenateString that takes 2 parameters - text(string) and a maxLength(number). 
// and returns the same string concatenated to the maxLength and 3 dots, all capital letters.

function concatenateString(text, maxLength) {
    if (text.length <= maxLength) {
      return text.toUpperCase();
    } else {
      return text.substring(0, maxLength).toUpperCase() + '…';
    }
  }
  
  const concatString = concatenateString('Longer than expected', 5);
  console.log(concatString);
  