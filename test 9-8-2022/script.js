let rev = 0;
let num = 123456;
let reverseNum;

while(num != 0){
	reverseNum = num % 10;
  rev = rev * 10 + reverseNum;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);