function getUserNames(users) {
  return users.map((user) => user.name);
}

const users = [
  { name: "Jane", age: 15 },
  { name: "Tom", age: 19 },
  { name: "David", age: 18 },
  { name: "Emily", age: 21 },
];

console.log(getUserNames(users));
