module.exports = function getZerosCount(number, base) {
  var a,c,e,d;
  var b = base;
  var n = number;

  for (var i = 2; i <= base; i++){
    if (b % i == 0){
      a = 0;
      while (b % i == 0){
        b /= i;
        a++;
    } 
      c = 0;
      e = number;
      while (e / i > 0){
        c = c + Math.floor(e / i);
        e /= i;
    }
      d = Math.floor(c / a);
      if (n > d){
        n = d;
    }
    }
  }
  return n;
}