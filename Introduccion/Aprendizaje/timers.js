//FUNCIONES DE TIEMPO
//setTimeout 
// let id;
// const saludo = () => {
//     console.log("Hola");
// };
// const iniciar = () => {
//     console.log("Iniciando saludo");
//     id = setTimeout(saludo,5000);
// };
// const parar = () => {
//     console.log("Parando timer");
//     clearTimeout(id);
// };
//setInterval
let id;
let cuenta = 0;
const contador = () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta ++;
    }, 1000);
};
const parar = () => {
    console.log("Parando cuenta");
    clearInterval(id);
};