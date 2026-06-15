function isPalindrome(string) {
  // Start coding here
  const splitWord = string.split('');
  const reverseWord = splitWord.reverse();
  const joinWord = reverseWord.join('');
  if (string === joinWord.trim()){
    return true
  } else {
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false