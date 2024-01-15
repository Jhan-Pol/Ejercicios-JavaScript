const agregarCaja = () => {
    const nuevaCaja = document.createElement("div");
    nuevaCaja.innerHTML = "Hola";
    nuevaCaja.setAttribute("class","caja activa");
    // const contenedor = document.getElementById("contenedor1");
    // contenedor.insertAdjacentElement("beforeend",nuevaCaja);
    document.querySelector("#contenedor1 .caja:last-child").replaceWith(nuevaCaja);
};