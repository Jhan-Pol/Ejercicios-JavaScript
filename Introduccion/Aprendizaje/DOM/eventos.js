//Como inicializar eventos en elementos 
// const cajas = document.querySelectorAll(".caja");
// cajas.forEach((caja) => {
//     caja.addEventListener("click",(e) => {
//         console.log(`Esta situado en la caja: ${e.target.innerHTML}`);
//     })
// });
//Propagacion de eventos
const contenedor = document.getElementById("contenedor1");
const primeraCaja = document.querySelector(".caja");
contenedor.addEventListener("click", () => {
    console.log("Haz dado click sobre el contenedor");
});
primeraCaja.addEventListener("click",(e) => {
    // e.stopPropagation();
    console.log("Haz dado click en la primera Caja");
});
