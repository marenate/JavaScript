var a = 1;
var b = 2;
var c = 3;

console.log("Resultado suma", a+b);
console.log("Resultado concatenar", a,b);
console.log("Resultado resta", b-c);
console.log("Resultado multiplicacion", a*b);
console.log("Resultado division", a/b);
console.log("Resultado residual ", a%b);
console.log("Resultado incremento despues", a++);
console.log("Resultado incremento antes ", ++a);
console.log("Resultado c-- ", c--);
console.log("Resultado --c  ", --c);
console.log("cadena1 "+ "Cadena2");
console.log("cadena1 ",878, "Cadena2");

const cinco =5;
const diez = 10;
console.log("Quince es: "+ (cinco + diez)+ ' y no ' + (2 * diez +5) +'.');

// Operador /=
var num = 8;
var num1 = 10;
console.log("Valor de num", num1/=2);
num = num/2
console.log("Valor de num", num);

// Operador *= muliplica
var num = 6;
console.log("Valor de num", num*=2);

// Operador -= resta
var num = 5;
console.log("Valor de num", num-=2);

// Operador += suma
var num = 20;
console.log("Valor de num", num+=2);

// Operador %=reciduo 
var num = 5;
console.log("Valor de num", num%=3);

// doble ==

var a = 1;
var b = '1'
if (a == b) {
    console.log('son iguales usando ==')
} else {
    console.log('son diferentes usando ==')
}

if (a === b) {
    console.log('son iguales usando ===')
} else {
    console.log('son diferentes usando ===')
}

// TDD = Test drive development