function birthdayCakeCandles(candles) {
    var max = candles[0];
    var tallestCandles = 0;
    for (var i = 0 ; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i];
        }
    }
    for (var i = 0 ; i < candles.length; i++){
       if(candles[i]===max){
        tallestCandles++; 
        } 
    }
    return tallestCandles;
}