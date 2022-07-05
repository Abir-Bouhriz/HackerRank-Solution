function plusMinus(arr) {
    var positives = 0;
    var negatives = 0;
    var zeroes = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            positives++;
        }
        else if(arr[i] < 0)
        {
            negatives++;
        }
        else
        {
            zeroes++;
        }
    }
    console.log(positives / arr.length);
    console.log(negatives / arr.length);
    console.log(zeroes / arr.length);

}
