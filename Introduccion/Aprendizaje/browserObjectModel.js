let ventana;
const abrirVentana = () => {
    ventana =window.open("","Ventana Nueva", "width=500");
    ventana.document.write("Holaaa");
}
const cerrarVentana = () => {
    ventana.window.close();
}
//--------------------------------------------------------------
//OBJECT LOCATION AND HISTORY
console.log(window.location.href);
const cargarDocumento = () => {
    location.assign("https://google.com");
}
const irAdelante = () => {
    history.forward();
}