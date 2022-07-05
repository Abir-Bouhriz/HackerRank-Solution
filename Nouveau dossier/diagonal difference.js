function diagonalDifference(arr) {
    var d1 = 0;
    var d2 = 0;
    for(var i=0; i<arr.length; i++){
        d1 = d1 + arr[i][i];
        d2 = d2 + arr[i][arr.length-1-i];
    }
    var dif = d1 - d2;
    if (dif<0) {
            dif= -dif
          }
          return dif;

}
