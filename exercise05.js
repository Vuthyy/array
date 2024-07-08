function findMax(arr) {
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

const numbers = [1, 5, 3, 9, 2, 43, 56, 37];
console.log(findMax(numbers));
