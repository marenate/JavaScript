// antes de ordernar
var array = [7,32,91,15,17,8,234.-4]
console.log("Este es el valor del array sin ordenar: "+ array);

function bubbleSrt(items){
    const elementos = items.length;

    for(var i=(elementos-1);i>0; i--){
            console.log("Indice i: ",i);
        for(var j=(elementos-1); j >0; j--){
            console.log("Indice j: ",j);
            if (items[j]< items [j-1]){
                
                 [items[j], items[j - 1]] = [items [j -1], items[j]]
                 
            }
        }
    }
    return items;
}
// Despues de ordenar
console.log("Valor despues de ordenar: ", bubbleSrt(array));

