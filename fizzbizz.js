function fizzbuzz(n){
    s = ''
    if(n%3==0) s+='fizz'
    if(n%5==0) s+='buzz'
    
    if(s === '') return n
    return s
}

for(i=1;i<20;i++) console.log(fizzbuzz(i))