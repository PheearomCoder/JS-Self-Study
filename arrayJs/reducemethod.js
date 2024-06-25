// Reduce array method

// const items = [
//     { id:1, name: "Phearom",age: 20},
//     { id:2, name: "Thida",age: 20},
//     { id:3, name: "Linda",age: 10},
//     { id:4, name: "Davith",age: 15},
//     { id:5, name: 'Vannak',age: 25},
// ];

const salary = [100,200,400,800];

const total = salary.reduce(function(p,c){
    console.log(`Total: ${p}`);
    console.log(`Current Value: ${c}`)
    // return p + c;
    
    //we can also use way
    p +=c;
    return p 

}, 0);

console.log(total)