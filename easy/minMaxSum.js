function miniMaxSum(arr) {
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0 ; i < arr.length; i++) {
        sum= sum+arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(sum-max, sum-min)
}
