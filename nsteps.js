function nsteps(n){
    for(i=1;i<=n;i++){
        s = '\''
        for(j=0;j<i;j++) s+='#'
        for(j=0;j<n-i;j++) s+=' '
        s += '\''
        console.log(s)
    }
}


nsteps(5)