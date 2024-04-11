function maxCharsInStr(str){
    charMap = {}

    // for (char of str){
    //     if(charMap[char]){
    //         charMap[char] = charMap[char] + 1
    //     } else {
    //         charMap[char] = 1
    //     }
    // }

    for(char of str){
        charMap[char] = charMap[char]+1 || 1
    }

    maxCount = 0
    maxChar = ''

    // for(const [key,value] of Object.entries(charMap)) {
    //     if(value > maxCount) {
    //         maxCount = value
    //         maxChar = key
    //     }
    // }

    for(key in charMap){
        if(charMap[key] > maxCount){
            maxCount = charMap[key]
            maxChar = key
        }
    }

    return ('Character '+maxChar+' occured '+maxCount+' times, which is max in string '+str)
}

console.log(maxCharsInStr('hare rama hare rama rama rama hare hare'))