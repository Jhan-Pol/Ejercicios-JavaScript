// const promesa = new Promise((resolve, reject) => {
//     //ACCION QUE SE EJECUTARA
//     setTimeout(() => {
//         const exito = true;
//         if(exito) {
//             resolve("La operacion fue exitosa");
//         } else {
//             reject("La operacion no tuvo exito");
//         }
//     },4000); 
    
// });
// promesa.then((mensaje) => {
//     console.log(mensaje);
// });
// promesa.catch((mensaje) => {
//     console.log(mensaje);
// });
//Promesa "Completa" => Es decir para poderla llamar en forma de funcion y no solo para utilizarla en el momento
const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post 1" ,"Post 2" ,"Post 3"];
            const error = true;
            if(error) {
                reject("Hubo un error");
            } else {
                resolve(posts);
            }
        },2000);
    });
};
fetchPosts()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });
