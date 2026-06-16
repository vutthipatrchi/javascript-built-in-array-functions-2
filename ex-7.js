function isPalindrome(string) {
  // Start coding here
  let word = string.split("").reverse().join('').trim()
  if(word === string){
    return true
  } else {
    return false
  }
  return word
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false