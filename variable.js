var nombre="Marena";
var apellido="Venancino";
var edad =35;

console.log(nombre,apellido,edad);

edad = true;
console.log("Modificando la variable edad: ", nombre,apellido,edad);

const accesorios = "Laptop";
console.log(accesorios);
// No va cambiar porque es una costantes
// accesorios = 2345;
// console.log(accesorios);

var dogs = ['Rex', 'Toby',9];
console.log("Primer elemento del array: ", dogs[1]);
console.log("Segundo elemento del array: ",dogs[2]);
var emptyVariable = null;
console.log("La variable asignado valor null: ", emptyVariable);

emptyVariable = false;
console.log("Modificando la variable a false: ",emptyVariable);

var vaciaVariable;
console.log("Variable sin asignar ninguna valor: ", vaciaVariable);

var dogs = ['Rex', 'Toby',9];
dogs[3]=true;
console.log("Array agreando un indice mas: ",dogs);
console.log("Imprimiendo el array por indice: ", dogs[2]);

var miStack = [];
console.log("Imprimiedo array de variables vacio: ", miStack);

miStack.push(1);
miStack.push(2);
miStack.push(3);
console.log("Imprimiendo el array de variables asignando valor con push: ", miStack);

miStack.push("Hola");
miStack.push(false);

console.log(miStack);

/// Elimina el último elemento de un arreglo
miStack.pop();
console.log("Imprimiendo array de variables, con diferentes tipos de valor: ", miStack);

/// Elimina el primer elemento de un arreglo
miStack.shift();
console.log("Imprimiendo despues de hacer shift: ", miStack);

var myArray = [1,2,3,4,5,6,7,8,9];
var splice =  myArray.splice(3,5);
console.log("Que valor tiene splice: ", splice);
console.log("Que valor queda en el array despues del splice: ", myArray);
//Multilineas
console.log('Linea 1 \n \n linea3');
console.log('Linea 4');

var arreglo23 =[];
arreglo23[5] = 8;
console.log(arreglo23);

console.log(arreglo23.shift());
arreglo23.push(2);
console.log(arreglo23[0]);
arreglo23[0]=83;
/// agrega un elemento al inicio de un arreglo
arreglo23.unshift(5); 
console.log(arreglo23);