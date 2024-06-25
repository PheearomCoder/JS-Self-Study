const products = ["T-thirt", "Shoes", "Watch"];
function eachProduct(index,arr){
    if(index >=arr.length){
        return;
    }
    console.log(arr[index])
    eachProduct(index + 1, arr);
}
// for(let i=0;i<products.length;i++){
//     console.log(products[i])
// }
 
eachProduct(0, eachProduct);


