let usuario;
const iniciarSesion = () => {
    usuario = prompt("Usuario");
    document.cookie = `Nombre=${usuario}; expires= 1 Jan 2025 1:00:00 UTC`;
};
usuario = document.cookie.split("=") [1];
if(usuario) {
    console.log("Bienvenido " + usuario);
} else {
    console.log("Tienes que iniciar Sesion");
}
const cerrarSesion = () => {
    document.cookie = `Nombre=; expires= 1 Jan 2013 1:00:00 UTC`;
    console.log("Sesion Cerrada");
};

