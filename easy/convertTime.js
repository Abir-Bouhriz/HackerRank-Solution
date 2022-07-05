function timeConversion(s) {
    var arr = s.slice(0,8).split(':');
    console.log('arr ', arr);
    if (s.indexOf('P') !== -1) {
        if (arr[0] !== '12') { 
            arr[0] = parseInt(arr[0]) + 12;
        }
    }
    else if (arr[0] === '12') {
        arr[0] = '00';
    }
    return arr.join(':');
}
 