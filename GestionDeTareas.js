// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*Jesus Adrian Luzanilla Tapia - 252699 */

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: true },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: true }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  
  /*For para recorrer cada uno de los elementos del arreglo */
  for (let index = 0; index < lista.length; index++) {
    
    /*Como el arreglo tareas es un arreglo de objetos solo se tiene que acceder a cada objeto 
    y a su vez acceder al atributo deseado (nombre y completado) */
    console.log("Nombre: "+lista[index].nombre);

    /*El atributo completado solo almacena true o false y el reto nos pide mostrar Pendiente
    o completado asi que con un if los transformamos segun la conveniencia*/
    if (!lista[index].completada) {
      console.log("Estado: "+"Pendiente");
    }else{
      console.log("Estado: "+"Completada");
    }
  }
}

//Prueba
//console.log(mostrarTareas(tareas));


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/

/*Funcion flecha tiene como parametro una lista que sera nuestro arreglo de tareas */
const obtenerCompletadas = (lista) => {
  /*Filtrar entre los elementos de lista que seran las tareas
  donde el elemento tarea con su atributo completada sea true
  la segunda parte del => evalua una condicion y regresara el
  objeto si es true en este caso la tarea completada. */
  return lista.filter(tarea => tarea.completada);
};

//Prueba
//console.log(obtenerCompletadas(tareas));


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  return lista.filter(tarea => !tarea.completada)
};

//Prueba
//console.log(obtenerPendientes(tareas));

/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  /*map lo que hace es crear un arreglo completamente nuevo
  dejando intacto el original, a este nuevo arreglo se le puede
  aplicar funciones en este caso le indicamos que de cada elemento
  solo tendra el nombre */
  return lista.map(tarea=>tarea.nombre);
};

//Prueba
//console.log(obtenerNombres(tareas));

/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  /*Retornar el tamaño de la lista */
  return lista.length;
}

//Prueba
//console.log("Total de tareas: " + contarTareas(tareas));

// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    return mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    return obtenerCompletadas(this.tareas);
    
  },

  mostrarPendientes: function() {
    return obtenerPendientes(this.tareas);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

if (contarTareas(sistema.tareas)<=0) {
  console.log("No hay tareas");
}
if(contarTareas(sistema.mostrarCompletadas()) === contarTareas(sistema.tareas)&& contarTareas(sistema.tareas)>=1){
  console.log("Todas las tareas completadas");
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 4;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    console.log(sistema.mostrarCompletadas());
    break;

  case 3:
    console.log(sistema.mostrarPendientes());
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
console.log();
sistema.mostrarTareas();
console.log();
console.log(sistema.mostrarCompletadas());
console.log();
console.log(sistema.mostrarPendientes());
console.log();
console.log(obtenerNombres(tareas));
console.log();
console.log("Total de tareas: " + contarTareas(tareas));