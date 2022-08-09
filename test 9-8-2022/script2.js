function Vowels(str) {
    var Count = 0;
    var string = str.toString();
  for (var i = 0; i <= string.length - 1; i++) {
  if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        Count = Count+1;
      }
    }
    return Count;
  }
  console.log(Vowels("aeiou"));