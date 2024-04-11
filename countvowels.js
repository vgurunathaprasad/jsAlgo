function countvowels(str){
    str = str.toLowerCase().replace(/[\W]/g,'')
    c = 0
    for(char of str){
        if( char === 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u') c++;
    }

    return c;
}

function countvowels2(str){
    const matches = str.match(/[aeiou]/gi)
    return matches? matches.length : 0
}

function countvowels3(str){
    const vowels = ['a','e','i','o','u']
    count = 0

    for(c of str.toLowerCase()){
        if(vowels.includes(c)) count++
    }

    return count
}

console.log(countvowels('rama'))
console.log(countvowels2('rama'))
console.log(countvowels3('nama shivaya'))
