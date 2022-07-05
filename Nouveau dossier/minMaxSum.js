function minMaxSum(array) {
    var sum = array[0],
        min = array[0],
        max = array[0];
        
    for (var i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }

    return [sum - max, sum - min];
}

console.log(minMaxSum([1, 3, 5, 7, 9]));