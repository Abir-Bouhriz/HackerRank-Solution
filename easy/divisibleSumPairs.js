function divisibleSumPairs(n, k, ar) {
    var pairs = 0;
    var sum;
    for(var i = 0; i < n-1; i++) {
        for(var j = i + 1; j < n; j++ ) {
            sum = ar[i] + ar[j];
            if(sum % k === 0) {
                pairs++;
            }   
        }    
    }
    return pairs;
}
