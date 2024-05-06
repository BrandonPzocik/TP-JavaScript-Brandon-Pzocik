//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente.

let numero1 = parseFloat(prompt("ingrese el primer número:"))
let numero2 = parseFloat(prompt("ingrese el segundo número:"))
let numero3 = parseFloat(prompt("ingrese el tercer número:"))


if (numero1 <= numero2 && numero1 <= numero3 && numero2 <= numero3) {
    console.log("Los números ordenados en forma ascendente son: " + numero1 + " " + numero2 + " " + numero3);

    } else if (numero1 <= numero2 && numero1 <= numero3 && numero3 <= numero2) {
    console.log("Los números ordenados en forma ascendente son: " + numero1 + " " + numero3 + " " + numero2);
    }
      else if (numero2 <= numero1 && numero2 <= numero3 && numero1 <= numero3) {
    console.log("Los números ordenados en forma ascendente son: " + numero2 + " " + numero1 + " " + numero3);

    } else if (numero2 <= numero1 && numero2 <= numero3 && numero3 <= numero1) {
        console.log("Los números ordenados en forma ascendente son: " + numero2 + " " + numero3 + " " + numero1);
    }
  
    else if (numero3 <= numero1 && numero3 <= numero2 && numero1 <= numero2) {
       console.log("Los números ordenados en forma ascendente son: " + numero3 + " " + numero1 + " " + numero2);

    } else if (numero3 <= numero1 && numero3 <= numero2 && numero2 <= numero1) {
        console.log("Los números ordenados en forma ascendente son: " + numero3 + " " + numero2 + " " + numero1);
    }

    else {
        console.log ("Error. Tiene que ingresar un numero valido")
    }
