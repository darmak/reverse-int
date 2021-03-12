module.exports = function reverse (n) {
    let k = 0;
    let p = Math.abs(n);
    
   k = Number(p.toString().split("").reverse().join(""));
   
   return k;
}
