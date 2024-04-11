function titlecase(str){
    let words = str.split(' ')
    // let result = []
    // for(word of words){
    //     result.push(word[0].toUpperCase()+word.slice(1))
    // }

    // return result.join(' ')

    return words.map(word => word[0].toUpperCase()+word.slice(1)).join(' ')
}

console.log(titlecase('hare rama hare hare hare krishna hare hare'))