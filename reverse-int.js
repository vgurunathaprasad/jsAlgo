function reverse(n){
    let x =  n.toString().split('').reverse().join('')
    return parseInt(x) * Math.sign(n)
}

console.log(reverse(-78))