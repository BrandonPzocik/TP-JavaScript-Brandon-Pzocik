//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente.

let num1 = parseInt(prompt("ingrese el primer número:"))
let num2 = parseInt(prompt("ingrese el segundo número:"))
let num3 = parseInt(prompt("ingrese el tercer número:"))

if (num1<= num2 && num1 <= num3 && num2 <= num3){
    console.log(num1, num2, num3)
} else {
    console.log(num1, num3, num2)
}

if (num2<= num1 && num2<= num3 && num1 <= num3){
    console.log(num2, num1, num3)
} else {
    console.log(num2, num3, num1)
}
if (num3<= num1 && num3 <= num2 && num2 <= num1){
    console.log(num3, num2, num1)
} else {
    console.log(num3, num1, num2)
}
if (num1<= num2 && num1 <= 3 && num2 <= num3){
    console.log(num1, num2, num3)
} else {
    console.log(num1, num3, num2)
}
if (num1 == num2 && num1 == num3 ){
    console.log("Los tres números son iguales")
}