//var i;
for(var i=0;i<3;i++){
    console.log("El valor es: ", i)
}

var arreglo = ['A','B','C'];
var texto = "Javascript";
var numero = 789456988;
console.log("Valor de Arreglo", arreglo.length);
console.log("Valor de texto", texto.length);
console.log("Valor de numero", numero.length); // undefined porque length para cadenas o texto

for(var i=0; i<arreglo.length; i++){
    console.log("El elemento del arreglo es: "+arreglo[i]+ " Con el indice: "+i)
}