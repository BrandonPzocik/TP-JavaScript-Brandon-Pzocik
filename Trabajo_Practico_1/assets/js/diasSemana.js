//Escriba un programa que pida al usuario un número del 1 al 7 y luego
//muestre el día de la semana correspondiente (1 para "Lunes", 2 para
//"Martes", etc.).
let dia = parseInt(prompt("ingrese un numero del 1 al 7"))

switch (dia) {
    case 1: 
        console.log("lunes");
        break;
    case 2:
        console.log("Martes");
        break; 
    case 3: 
        console.log("Miercoles");
        break;
    case 4: 
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7: 
    console.log("Domingo");
    break;
    default: 
        console.log("el número ingresado no es valido, ingrese un número del 1 al 7")
}