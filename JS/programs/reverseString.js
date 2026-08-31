//11.reverse programs
let str = "hello how are you";
let arr7 = str.split(" ");
let result = " ";
for (let i = 0; i < arr7.length; i++) {
  temp = arr7[i];
  let ans = "";
  for (let j = temp.length - 1; j >= 0; j--) {
    ans = ans + temp[j];
  }
  result = result + ans + " ";
}
console.log(result.trim());
