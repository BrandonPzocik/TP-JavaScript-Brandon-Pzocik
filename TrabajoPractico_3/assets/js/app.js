//Funcionalidades:
/*1. Agregar Tarea: El usuario podrá agregar una nueva tarea a la lista
proporcionando un nombre para la tarea.
2. Listar Tareas: El usuario podrá ver todas las tareas actualmente en la lista.
3. Editar Tarea: El usuario podrá modificar el nombre de una tarea existente en la
lista.
4. Eliminar Tarea: El usuario podrá eliminar una tarea de la lista.*/

let tareas = []
let funcionalidades = 0
do {
funcionalidades= (prompt("Ingrese la funcionalidad que desea realizar: \n" +
"1. Agregar Tarea \n" +
"2. Listar Tareas \n" +
"3. Editar Tarea \n" +
"4. Eliminar Tarea \n" +
"5. Salir"));

if (funcionalidades === ""){
    alert("Error, ingrese un valor valido");
} else {
switch (funcionalidades){
    case "1" : 
    let nuevaTarea = prompt(" ingrese una tarea: ").trim();
    if (nuevaTarea === ""){
        alert("No puede estar vacio")
    } else 
    tareas.push(nuevaTarea);
    break;
    case "2": 
    if (tareas.length === 0){
        alert("No hay tareas")
    } else {
        let listaTareas = "Lista de Tareas:\n";
        for (let i = 0; i < tareas.length; i++) {
            listaTareas += `${i + 1}. ${tareas[i]}\n`;
        }
        alert(listaTareas);
    }
    break;
    case "3": 
    if (tareas.length === 0){
    alert("No hay tarea para editar")
    }else {
    let indiceTarea = Number(prompt("ingrese el numero de la tarea que desea editar: "))
     if (indiceTarea > 0 && indiceTarea <= tareas.length){
        let cambioTarea = prompt("Ingrese la nueva tarea").trim();
        if (cambioTarea === ""){
            alert("No puede estar vacio")
        } else {
            tareas.splice(indiceTarea - 1, 1, cambioTarea);
        }
     }
    }
    break;
    case "4" : 
    if (tareas.length === 0){
        alert("No hay tareas para eliminar")
    } else {
    let indiceEliminar = Number(prompt("ingrese el numero de la tarea que desea eliminar"))
     if (indiceEliminar > 0 && indiceEliminar <= tareas.length){
        tareas.splice(indiceEliminar - 1, 1);
        alert("Tarea eliminada con éxito.");
     }
    }
    break;
    case "5" : 
    alert("Gracias por utilizar el programa")
    break;
    default:
        alert("Error, vuelva a ingresar")
}
} 
}while ( funcionalidades !== "5" )

