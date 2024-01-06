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
//De esta manera vemos el tiempo asincronico, es decir que la promesa se ejecuta por debajo del otro codigo 
// console.log("Comienza operacion");
// fetchPosts()
//     .then((posts) => {
//         console.log(posts);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log("Finaliza operacion");
//Si queremos que se ejecute primero la promesa y luego el demas codigo tendremos que hacer uso de async y await
const mostrarPosts = async() => {
    try {
        const posts = await fetchPosts();
        //todo el codigo que pongamos por
        //debajo de la promesa se ejecutara
        //despues del resultado que presente esta
        console.log(posts);
    } catch(error) {
        console.log(error);
    }
    
}
mostrarPosts();