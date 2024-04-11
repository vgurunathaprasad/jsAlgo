function buildCharMap(str){
    charMap = {}
    for(char of str){
        charMap[char] = charMap[char]+1 || 1
    }
    return charMap
}

function getSimpleStr(str){
    return str.toLowerCase().replace(/[\W]/g,'')
}

function anagrams(strA,strB){
    mapA = buildCharMap(getSimpleStr(strA))
    mapB = buildCharMap(getSimpleStr(strB))

    console.log(mapA)
    console.log(mapB)

    if(Object.keys(mapA).length !== Object.keys(mapB).length) return false

    for(let key in mapA){
        if(mapA[key] !== mapB[key]) return false
    }

    return true
}

console.log(anagrams('raMa!','@haRe'))
console.log(anagrams('RAIL! SAFETY!','fairy tales'))