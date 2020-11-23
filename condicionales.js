var texto;
texto = "Servidor On";
if(texto=='Servidor off'){
    console.log("Test pass")
}else{
    console.log("Test fail")
}

var num = 48;
if(num<50){
    console.log("Numero menor")
}

var num1 = 40;
var num2=  10;
var bar = 5;
var foo = 7;
if(num1<num2 && foo>bar){
    console.log("Pas and")
}

if(num1<num2 || foo>bar){
    console.log("Pas Or")
}

// ejemplo con if con un false
var notTrue = false;
if(!notTrue){
    console.log("El valore es: ", notTrue);
}

if(notTrue){
    console.log("El valore es sin !: ", notTrue);
}

// Ejemplo Shwitch
var rango = "Coronel"
switch (rango){
    case "soldado Razo":
        console.log("no autorizado");
    case "Comandanate":
        console.log("Necesita autorizacion");
    case "Capitan":
        console.log("Autorizacion requerida")
    case "General":
        console.log("Usuario autorizado")
    default:
        console.log("Usuario no default: No autorizado")

}

var opciones = 43;
switch (this.opciones){
    case 1:
        console.log("opciones: no autorizado");
        break;
    case 43:
        console.log("opciones: Necesita autorizacion");
        break;
    case 54:
        console.log("opciones: Autorizacion requerida");
        break;
    case "General":
        console.log("opciones: Usuario autorizado")
        break;
    default:
        console.log("opciones: Respuesta default: No autorizado")

}

var x = 43;
switch (x){
    case (x<1):
        console.log("Valor x: Si es menos");
        break;
    case (x>1):
        console.log("Valor x: Si es mayor");
        break;    
    
    default:
        console.log("X: Respuesta default: No autorizado")

}

var x = 9;
switch (x){
    case 1:
        console.log("Valor del número es 1");
        break;
    case 3:
        console.log("Valor del número es 3");
        break;    
    case 5:
        console.log("Valor del número es 5");
        break; 
    default:
        console.log("Valor del número es ninguno de los casos")

}