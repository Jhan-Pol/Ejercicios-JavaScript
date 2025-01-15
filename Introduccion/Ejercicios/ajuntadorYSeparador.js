//Crear un programa el cual encripte palabras que tomaremos por separado y que las separe
//con algun caracter que le indiquemos
const añadirPalabras = (tamañoArray) => {
  let resultado;
  for (let i = 0; i < tamañoArray; i++) {
    resultado = prompt(`Digite la palabra numero ${i + 1}`);
    conjunto[i] = resultado;
  }
};
const separador = (conjunto) => {
  let simbolo = prompt(
    "Digite que simbolo quiere que separe las palabras de la frase"
  );
  console.log(conjunto.join(`${simbolo}`));
};
// let tamañoArray = parseInt(prompt("Cuantas palabras tendra su frase?"));
// let conjunto = [tamañoArray];
// window.alert(
//   "A continuacion hara su frase segun el numero de palabras que escogio"
// );
// añadirPalabras(tamañoArray);
// separador(conjunto);
