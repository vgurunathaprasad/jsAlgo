function pyramids(n){
    k = ((2*n)-1)/2
    b = 1
    s = ''
    for(i=0;i<n;i++){
        s='\''
        for(j=0;j<k-1;j++) s+=' '
        for(j=0;j<i+b;j++) s+='^'
        for(j=0;j<k-1;j++) s+=' '
        k--
        b++
        s+='\''
        console.log(s)
    }

}

pyramids(15)