function staircase(n) {
  for(var i = 0; i < n; i++){
      var stair = '';
      for(var j = 0; j < n; j++){
        if(  j < (n -1 -i)){ 
          stair = stair + ' ';
        }else{ 
          stair = stair + '#';
        }
      }
      console.log(stair);
  }
}