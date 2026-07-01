function temporizador(callback){
    /*setTimeout espera el tiempo indicado en ms y luego ejecuta una funcion
    en este caso mensaje */
    setTimeout(function(){
            callback();
        },3000);
}


/*funcion callback */
function mensaje(){
    console.log("Mensaje de exito");
}

/**Prueba */
temporizador(mensaje);


/*La funcion en si no sabe que operacion va a realizar es el callback el que
decide*/
function calcular(num1,num2,callback){
    let resultado = callback(num1,num2);
    console.log("Resultado: ", resultado);
}

/*Posibles funciones callback para calcular */
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

/*Ejecucion de cada callback */
calcular(2, 6, sumar);
calcular(2, 6, restar);
calcular(2, 6, multiplicar);
calcular(2, 6, dividir);

/*3. Preparación de una Receta (Secuencia Asíncrona)*/
function cortarIngredientes(ingredientes, callback){
    setTimeout(()=>{
        console.log("Cortando ingredientes: ",ingredientes);
        callback();
    },2000);
}

function cocinar(accion, callback){
    setTimeout(()=>{
        console.log("Cocinando ingredientes: ",accion);
        callback();
    },3000);
}

function servirPlato(plato){
    console.log("Listo tu plato esta servido");
}

/*Receta */
function prepararReceta(plato, callback){
    console.log("Preparando la receta: ", plato);
    cortarIngredientes("Vegetales", ()=>{
        cocinar("Saltear",()=>{
            cortarIngredientes("Pollo", ()=>{
                cocinar("Freir", ()=>{
                    cocinar("Mezclar todo", ()=>{
                        servirPlato(plato);
                        callback();
                    });
                });
            });
        });
    });
}

prepararReceta("Pollo al wok",()=>{
    console.log("Receta completada");
});
