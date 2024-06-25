// Array map method

const items = [
  { id: 1, name: "Phearom" },
  { id: 1, name: "Thida" },
  { id: 1, name: "Linda" },
  { id: 1, name: "Davith" },
  { id: 1, name: "Vannak" },
];
// console.log(items)
// const newItems = items.map(function(i){
//     return i;
// });
// console.log(newItems)
const newPeople = items.map(function (p) {
  return p;
});

console.log(newPeople)