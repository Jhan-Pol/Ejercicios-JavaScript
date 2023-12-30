//Solicitar al usuario una palabra y mostrar el numero de vocales y consonantes.
//Ademas tambien debe mostrar lo largo de la palabra
//ALGORITM
let palabra=prompt("Digite la palabra").toLowerCase();
let vocales=0, consonantes=0;
// document.write(palabra.length);
vocalesYConsonantes(palabra);
//Functions
function vocalesYConsonantes(palabra) {
for(const letras of palabra) {
    if((letras=="a")||(letras=="e")||(letras=="i")||(letras=="o")||(letras=="u")) {
        vocales++;
    }
    else {
        consonantes++;
    }
}
document.write(`Hay ${vocales} vocales, ${consonantes} consonantes y la palabra tiene un largor de ${palabra.length}`);
}
