/*Una tienda aplica un descuento del 15% para las compras que incluyan 10
artículos o más iguales cuyo precio total sea superior a 20000 pesos. Tu programa
debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y
el precio. Tener en cuenta que, solo se pueden ingresar números mayores a 1, y
además, si la cantidad y el monto supera lo establecido, el descuento deberá
aplicarse al precio total para luego mostrar en pantalla un mensaje que lo
confirme. De lo contrario, indicar que no se superó la cantidad o el precio, según
corresponda.*/

let cantArticulos = parseInt(prompt("ingrese la la cantidad de articulos"))
let precioArticulo = parseInt(prompt("ingrese el precio del articulos"))
let precioTotal = (cantArticulos * precioArticulo)
let descuentoAplicado = false
let descuento

switch (true) {
    case (cantArticulos >= 10 && precioTotal > 20000):
        descuento = precioTotal * 0.15 
        precioTotal = precioTotal - descuento
        descuentoAplicado = true
        break
    case (cantArticulos>= 10 && precioTotal <= 20000):
        precioTotal = precioTotal
        break
    case (cantArticulos < 10 && precioTotal > 20000):
        precioTotal = precioTotal
        break 
    default:
    console.log("no se supero la cantidad de articulos o el monto total para aplicar el descuento")
}

if (descuentoAplicado) {
    console.log("Se aplicó un descuento del 15%.");
}

console.log("Total a pagar: $" + precioTotal);



