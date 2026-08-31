
//spy number
function spyNumber(number) {
  let sum = 0;
  let product = 1;
  while (number > 0) {
    let ld = number % 10;
    sum = sum + ld;
    product = product * ld;
    number = Math.floor(number / 10);
  }
  if (sum == product) {
    return true;
  } else {
    return false;
  }
}
console.log(spyNumber(123));