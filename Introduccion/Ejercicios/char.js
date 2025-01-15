//Solicitar al usuario una palabra y mostrar el numero de vocales y consonantes.
//Ademas tambien debe mostrar lo largo de la palabra

//Functions
function vocalesYConsonantes(palabra) {
  palabra.toLowerCase();
  let vocales = 0,
    consonantes = 0;
  for (const letras of palabra) {
    if (
      letras == "a" ||
      letras == "e" ||
      letras == "i" ||
      letras == "o" ||
      letras == "u"
    ) {
      vocales++;
    } else {
      consonantes++;
    }
  }
  document.write(
    `Hay ${vocales} vocales, ${consonantes} consonantes y la palabra tiene un largor de ${palabra.length}`
  );
}

//vocalesYConsonantes("hola como estas?");

//------------------------------------------------------------------------------------------------------------------

// Escribir un programa que pregunte el nombre completo del usuario en la consola
//  y después muestre por pantalla el nombre completo del usuario tres veces,
// una con todas las letras minúsculas, otra con todas las letras mayúsculas y
// otra solo con la primera letra del nombre y de los apellidos en mayúscula.
// El usuario puede introducir su nombre combinando mayúsculas y minúsculas como
// quiera.

const combinationName = () => {
  const nameUser = prompt("Escriba su nombre completo");

  if (typeof nameUser !== "string") {
    console.log("El parametro debe ser un string");
  } else {
    const camelCase = new Array(nameUser.length);
    console.log(nameUser.toLowerCase());
    console.log(nameUser.toUpperCase());
    for (let i = 0; i < nameUser.length; i++) {
      if (nameUser[i] === " ") {
        camelCase.push(" ");
      } else if (i === 0 || nameUser[i - 1] === " ") {
        camelCase.push(nameUser[i].toUpperCase());
      } else {
        camelCase.push(nameUser[i].toLowerCase());
      }
    }
    console.log(camelCase);
  }
};

//----------------------------------------------------------------------------
//quickSort
//Implementa un algoritmo para ordenar una lista
//  de números sin usar funciones predefinidas como Sort()

const quickSort = (arreglo) => {
  if (typeof arreglo != "object") {
    return "debe ser un array";
  }

  if (arreglo.length <= 1) {
    return arreglo;
  }

  const pivote = arreglo[arreglo.length - 1];
  const izquierda = [];
  const derecha = [];

  for (let i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] < pivote) {
      izquierda.push(arreglo[i]);
    } else {
      derecha.push(arreglo[i]);
    }
  }

  return [...quickSort(izquierda), pivote, ...quickSort(derecha)];
};

arreglo = [1, 8, 44, 9, 2, 0, 66, 8, 44];
console.log(quickSort(arreglo));
