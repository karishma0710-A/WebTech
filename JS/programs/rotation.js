let str1 = "javascript";
let str2 = "scriptjava";

let res = (str1 + str1).includes(str2);
console.log(res);


//frequency
let str = "hello";
let freq = {};

for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq);