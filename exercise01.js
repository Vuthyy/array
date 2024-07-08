function findAdults(users) {
  return users.filter((user) => user.age > 18);
}

const users = [
  { name: "Jane", age: 15 },
  { name: "Tom", age: 19 },
  { name: "David", age: 18 },
  { name: "Emily", age: 21 },
];

console.log(findAdults(users));
