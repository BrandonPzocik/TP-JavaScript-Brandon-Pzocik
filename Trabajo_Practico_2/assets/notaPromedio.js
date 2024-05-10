/*Crea un programa que pida la nota de un estudiante en los tres trimestres del curso
y calcule la nota promedio. Tener en cuenta que, solo se pueden ingresar números
del 1 al 10 . El resultado que dará será el siguiente:
- 'Nota Insuficiente' si la el promedio está entre 1 y 3,
- 'Nota Regular' si está entre 4 y 5,
- 'Nota Buena' si está entre 6 y 7,
- 'Nota Muy Buena' si está entre 8 y 9 y
- 'Nota Sobresaliente' si es igual a 10. */
let nota1 = parseInt(prompt("ingrese la nota del primer trimestre"))
let nota2 = parseInt(prompt("ingrese la nota del segundo trimestre"))
let nota3 = parseInt(prompt("ingrese la nota del primer trimestre"))

let notasValidas = true

if (isNaN(nota1) || nota1 <1 || nota1 > 10) {
    console.log("la nota del primer trimestre no es valida")
    notasValidas = false
} 
if (  isNaN(nota2) || nota2 < 1 || nota2 > 10) {
    console.log("la nota del segundo trimestre no es valida")
    notasValidas = false
}
if ( isNaN(nota3) || nota3 < 1 || nota3 > 10){
    console.log("la nota del tercer trimestre no es valida")
    notasValidas = false
}


if (notasValidas ){
    let promedio = (nota1 + nota2 + nota3) / 3 

if (promedio >= 1 && promedio <=3){
    console.log("Nota Insuficiente")
} else if (promedio >=4 && promedio <= 5){
    console.log("Nota regular")
}else if (promedio >=6 && promedio <= 7){
    console.log("Nota buena")
}else if (promedio >= 8 && promedio <= 9){
    console.log("Nota Muy buena")
}else if (promedio == 10 ){
    console.log("Sobresaliente")
}
}