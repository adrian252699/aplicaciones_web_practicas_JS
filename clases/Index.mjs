import Estudiantes from "./Estudiantes.mjs";

let estudiante = new Estudiantes();
estudiante.nombre = "Adrian";
estudiante.carrera = "ISW";

console.log(estudiante);
console.log(estudiante.saludar());
console.log(estudiante.verPromedio());