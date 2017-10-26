function fibonocci(num,memo){
  memo = memo|| {};
  if (memo[num]){return memo[num];}
  if (num <=1){ return 1}
  return memo[num] = fibonocci(num-1,memo) + fibonocci(num-2,memo);
}

console.log(fibonocci(40));