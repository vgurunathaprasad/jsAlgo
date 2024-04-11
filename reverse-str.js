// function reverse(str){
//     let reversed = ''

//     for (char of str){
//         reversed = char + reversed
//     }


//     return reversed
// }


// function reverse(str){
    
//     let reversed = ''

//     for(i=0;i<str.length;i++){
//         reversed = str[i]+reversed
//     }

//     return reversed
// }


function reverse(str){
    return str.split('').reverse().join('')
}

console.log(reverse('rama'))