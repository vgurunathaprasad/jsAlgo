function chunk(array,size){
    l = []
    j = 0
    for(i=0;i<array.length;i+=size){
        t = []
        k=0
        while(k<size && j<array.length){
            t.push(array[j])
            k++
            j++
        }
        l.push(t)
    }
    return l
}

function chunk2(array,size){
    l = []
    for(i=0;i<array.length;i+=size){
        l.push(array.slice(i,i+size))
    }
    return l
}

// function chunk2(array,size){
//     l = []
//     i = 0
//     while(i<array.length){
//         l.push(array.slice(i,i+size))
//         i+=size
//     }

//     return l
// }

console.log(chunk2([1,2,3,4,5],4))