function isPalindrome(string) {
  // Start coding here
  const splitWord = string.split('');
  const reverseWord = splitWord.reverse();
  const joinWord = reverseWord.join('');
  return string.trim() === joinWord.trim()
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false