//merge two sorted array
let array1 = [3, 5, 9],
  n = array1.length;
let array2 = [7, 8, 12, 18],
  m = array2.length;
let resArray = [];
let i = 0,
  j = 0,
  k = 0;

while (i < n && j < m) {
  if (array1[i] < array2[j]) {
    resArray[k] = array1[i];
    i++;
  } else {
    resArray[k] = array2[j];
    j++;
  }
  k++;
}
while (i < n) {
  resArray[k] = array1[i];
  i++;
  k++;
}
while (j < m) {
  resArray[k] = array2[j];
  j++;
  k++;
}
console.log(resArray);
