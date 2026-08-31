//reverse number
function reverseNUmber(number) {
  let rev = 0;
  while (number > 0) {
    let ld = number % 10;
    rev = rev * 10 + ld;
    number = Math.floor(number / 10);
  }
  return rev;
}
console.log(reverseNUmber(123));
