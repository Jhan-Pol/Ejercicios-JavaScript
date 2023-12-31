//Toda la info sobre como funciona ya la habia visto anteriormente pero como recordatorio hare ejercicios :) 
class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    //Metodo estatico
    static borrar(id_usuario) {
        console.log(`El usuario con id ${id_usuario} ha sido eliminado`);
    }
    //Propiedad estatica
    static registrados = 1000;
}
//Inicializacion de la clase Usuario 
const usuario = new Usuario("Carlos", "correo@correo.com");
console.log(usuario);
//Llamado del metodo estatico _borrar_
Usuario.borrar(3);
//Inicializacion de la propiedad estaica _registrados_
console.log(Usuario.registrados);
