//Funcion la cual nos pedira al llamarla que le pasemos como parametro otra funcion
const obtenerPostsDeUsuarios = (usuario, callBack) => {
    console.log(`Obteniendo posts de ${usuario}`);
    setTimeout(() => {
        let posts = ["Post1", "Post2", "Post3"];
        callBack(posts);
        }, 2000);
}
//----------------------------------------------------------------------------------------------------------
//LLamado de callBack
obtenerPostsDeUsuarios("Carlos", (posts) => {
    console.log(posts);
});