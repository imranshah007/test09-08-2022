function str(s) {
  comb = new Array();
for(i=0;i<s.length;i++) {
for(j=i+1;j<s.length+1;j++) {
comb.push(s.slice(i, j));
}
  }
  return comb;
}

console.log(str("dog"));