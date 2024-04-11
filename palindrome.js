function reverse(str){
    return str.split('').reverse().join('')
}

function palindrome(str){
    if(str === reverse(str)) return true
    return false
}

console.log(palindrome('rama'))
console.log(palindrome('amma'))
