let cajas = document.querySelectorAll(".caja");
console.log(cajas);
let tamaño = 24;
const aumentarFuente = () => {
    cajas.forEach((caja) => {
        tamaño++;
        caja.style.fontSize = `${tamaño}px`;
    });
};
const disminuirFuente = () => {
    cajas.forEach((caja) => {
        tamaño--;
        caja.style.fontSize = `${tamaño}px`;
    });
};