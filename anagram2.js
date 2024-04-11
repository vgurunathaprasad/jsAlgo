function getStrSorted(str){
    return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')
}

function anagrams(strA,strB){
    strA = getStrSorted(strA)
    strB = getStrSorted(strB)
    

    return strA === strB
}

console.log(anagrams('raMa!','@haRe'))
console.log(anagrams('RAIL! SAFETY!','fairy tales'))