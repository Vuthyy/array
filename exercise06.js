function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  }, {});
}

const items = [
  { name: "Bread", category: "Grocery" },
  { name: "Butter", category: "Grocery" },
  { name: "Shampoo", category: "Personal Care" },
];

console.log(groupByCategory(items));
