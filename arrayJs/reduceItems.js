

const items = [
    { 
        id:1, 
        name: "Phearom",
        age: 20,
        salary: 300,
    },
    { 
        id:2, 
        name: "Thida",
        age: 20,
        salary: 300,
    },
    { 
        id:3, 
        name: "Linda",
        age: 10,
        salary: 300,
    },
    { 
        id:4, 
        name: "Davith",
        age: 15,
        salary: 300,
    },
    { 
        id:5, 
        name: 'Vannak',
        age: 25,
        salary: 300,
    },
];

// const totalSalary = items.reduce(function(p,c){
//     console.log(`Total: ${p}`);
//     console.log(`Current Value: ${c}`);
//     return p+c;
// },0);
// console.log(totalSalary)

const totalSalary = items.reduce(function(p, c){
    // console.log(p)
    // console.log(c.salary)

    const salary = c.salary;
    const total = p + salary;
    return total;

}, 0);
console.log(totalSalary);
