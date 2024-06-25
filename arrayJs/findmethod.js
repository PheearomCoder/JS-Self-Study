// Find method that match the condition 
// return first that match condition
// no return new array

const items = [
    { id:1, name: "Phearom",age: 20},
    { id:2, name: "Thida",age: 20},
    { id:3, name: "Linda",age: 10},
    { id:4, name: "Davith",age: 15},
    { id:5, name: 'Vannak',age: 25},
];

const newItems = items.find(function(p){
    return p.age ==20;
});
console.log(newItems)


// Compare between find Vs filter
const newPeople = items.filter(function(i){
    return i.name;
})
console.log(newPeople[0].name)