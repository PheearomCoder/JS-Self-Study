// Iterate in array or looping it

const people = [
    {id: 1, name: "Phearom"},
    {id: 2, name: "Vannka"},
    {id: 3, name: "Vireak"},
    {id: 4, name: "Savath"},
    {id: 5, name: "Makara"},
    {id: 6, name: "Mab"},
]

// The first step
// function showPerson(p){
//     console.log(p)
// }
// people.forEach(showPerson)

// people.forEach(function(p){
//     console.log(p)
// });

// We can using Arrow Function

people.forEach((p) =>{
    console.log(p)
});

