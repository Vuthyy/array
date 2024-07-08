function uniqueValues(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(uniqueValues(numbers));
