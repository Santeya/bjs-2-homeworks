// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let result;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  } return max;
}

// Задание 3
function worker2(arr) {
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  let diff = max - min;
  return diff;
}
