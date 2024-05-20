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
funcionalidades= Number(prompt("Ingrese la funcionalidad que desea realizar: \n" +
"1. Agregar Tarea \n" +
"2. Listar Tareas \n"));
switch (funcionalidades){
    case 1 : 
    let nuevaTarea = prompt(" ingrese una tarea: ");
    tareas.push(nuevaTarea);
    break;
    case 2: 
    if (tareas.length === 0){
        console.log("No hay tareas")
    } else {
        let listaTareas = "Lista de Tareas:\n";
        for (let i = 0; i < tareas.length; i++) {
            listaTareas += `${i + 1}. ${tareas[i]}\n`;
        }
        alert(listaTareas);
    }
    break;
    case 3: 
    tareas.splice()
} 
}while ( funcionalidades >0 && funcionalidades <2)

