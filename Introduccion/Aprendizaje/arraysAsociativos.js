const personaArray = ["Carlos", 27, "Correo.com", true, true];
//No le estamos dando valores de este modo a los indices, por lo cual no sabemos a que se refiere cada elemento
//Array asociativo o array con objetos 
const persona = {
    nombre: "Carlos", 
    edad: 27,
    correo: "Correo@Corrreo.com",
    //Pueden haber arrays asociativos dentro de otros arrays asociativos
    suscripciones: {
        web: true,
        correo: true
    },
    saludo: function() {
        alert("Hola");
    },
    colores: ["Cafe", "Rojo"]
}
//Llamando el array asociativo que estaba dentro del array asociativo principal
console.log(persona.suscripciones.web);
//Llamndo la funcion saludo 
// persona.saludo();
//Llamndo el array normal
console.log(persona.colores[0]);
//Creacion de variable para guardar objeto
const variable = "correo";
console.log(persona[variable]);
//Creacion de un objeto integrado al array asociativo pero desde fuera de este
persona.pais = "Mexico";
console.log(persona.pais);
console.log(persona);