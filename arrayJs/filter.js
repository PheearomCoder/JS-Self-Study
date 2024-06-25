// Filter method in order to find condition 
const items = [
    { id:1, name: "Phearom",age: 20},
    { id:2, name: "Thida",age: 32},
    { id:3, name: "Linda",age: 10},
    { id:4, name: "Davith",age: 15},
    { id:5, name: 'Vannak',age: 25},
];

// const newItems = items.filter(function(p){
//     // return p.name === "Phearom";
//     return p.id ===2;
// });
const newItems = items.filter(function(p){
    return p.age <=20;
});

console.log(newItems)

// console.log(items)
// console.log(newItems)

