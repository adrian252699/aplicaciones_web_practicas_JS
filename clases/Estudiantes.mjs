import Persona from "./Persona.mjs";

export default class Estudiantes extends Persona{
    constructor(){
        super();
        this.carrera=""
    }

    estudiar(){
        return `${this.nombre} esta estudiando ${this.carrera}`;
    }

    #calcularPromedio(){
        return 65;
    }

    verPromedio(){
        return "Promedio ", this.#calcularPromedio();
    }

}