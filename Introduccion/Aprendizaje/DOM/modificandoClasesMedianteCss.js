const primeraCaja = document.querySelector("#contenedor1 .caja:last-child");
// console.log(primeraCaja.classList);
const agregarClase = () => {
    primeraCaja.classList.add("activa");
};
const eliminarClase = () => {
    primeraCaja.classList.remove("activa");
};
const comprobar = () => {
    if(primeraCaja.classList.contains("activa")) {
        console.log("La caja tiene la clase activa");
    } else {
        console.log("La caja no tiene la clase activa");
    }
    console.log("La caja contiene las sigientes clases");
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    })
}