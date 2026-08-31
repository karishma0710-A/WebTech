//1.largest element in array
let arr1 = [12, 5, 18, 7, 3];

if (arr1.length == 0) {
  console.log("array is empty");
} else {
  let largest = arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
      largest = arr1[i];
    }
  }
  console.log("largest", largest);
}

//2.smallest element in array
let arr2 = [12, 5, 18, 7, 3];

if (arr2.length == 0) {
  console.log("array is empty");
} else {
  let smallest = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
      smallest = arr2[i];
    }
  }
  console.log("smallest", smallest);
}

//3.sum of array elements
//3.1
let arr3 = [10, 20, 30, 40];
if (arr3.length == 0) {
  console.log("array is empty");
} else {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  console.log("sum of elements is:", sum);
}

//3.2
let arr4 = [10, 20, "30", 40];
if (arr4.length == 0) {
  console.log("array is empty");
} else {
  let sum = 0;
  for (let i = 0; i < arr4.length; i++) {
    sum += Number(arr4[i]); //converts string into Number format
  }
  console.log("sum of elements is:", sum);
}

//4.count even , odd
let arr5 = [10, 15, 8, 21, 6, 9];
if (arr5.length === 0) {
  console.log("array is empty");
} else {
  let evenCount = 0,
    oddCount = 0;
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log("evencount:", evenCount, "oddcount:", oddCount);
}

//5.largest & secondlargest
let arr6 = [10, 15, 8, 21, 6, 9];
if (arr6.length === 0) {
  console.log("array is empty");
} else {
  largest = Number.MIN_VALUE; // or (- infinity)
  second_largest = Number.MIN_VALUE;
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > largest) {
      second_largest = largest;
      largest = arr6[i];
    } else if (arr6[i] > second_largest) {
      second_largest = arr6[i];
    }
  }
  console.log("largest:", largest, "second Largest:", second_largest);
}

//6.frequency of elements
let arr7 = [1, 2, 2, 3, 1, 4, 2];
let freq = [];

if (arr7.length > 0) {
  for (let k of arr7) {
    freq[k] = (freq[k] || 0) + 1;
  }
  console.log(freq);
}

for (let key in freq) {                         //add this to above code for find duplicates
  if (freq[key] > 1) {
    console.log(key);
  }
}