// Find tatal salary each months using array

const salary = [100,200,300,40]

function total (){
    let total =0;
    for(let i=0;i<salary.length;i++){
        total +=salary[i];
    }
    return total;
}
console.log(total());