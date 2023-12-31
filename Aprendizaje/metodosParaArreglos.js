//.length = Nos permite conocer la cantidad de elementos de un arreglo 
const colores = ["Amarillo", "Azul", "Rojo"];
console.log(colores.length);
//.toString() = Nos permite tranformar un arreglo a una cadena de texto
const colores2 = colores.toString();
console.log(colores2);
//o tambien...
console.log(colores.toString());
//.join() = Nos permite transformar un arreglo a una cadena y separar cada elemento con el caracter que queramos
console.log(colores.join("+"));
//.sort() = Nos permite ordenar un arreglo de cadenas de texto de forma alfabetica. 
const letras = ["d", "c", "a", "e", "b"];
console.log(letras.sort());
//Ademas tambien nos permite ordenar numeros...
const numeros = [4, 2, 1, 3, 5];
console.log(numeros.sort());
//.reverse() = Nos permite ordenar un arreglo de forma descendente 
console.log(letras.reverse());
//Ademas tambien sirve con numeros...
console.log(numeros.reverse());
//.concat() = Nos permite juntar dos arreglos en uno solo
const arreglo1 = [1, 2, 3];
const arreglo2 = ["A", "B", "C"];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);
//.push() = Nos permite agregar un elemento al final de un arreglo 
colores.push("Verde");
console.log(colores);
//.pop() = Nos permite eliminar el ultimo elemento de una arreglo 
colores.pop();
console.log(colores);
//.shift() = Eliminae l primer elemento de un arreglo y rrecore los demas elementos.
//Ademas este nos retornara el elemnto eliminado por lo cual podemos guardarlo en una variable
const dias = ["Lunes", "Martes", "Miercoles", "Jueves" , "Viernes"];
const diaEliminado = dias.shift();
console.log(dias);
console.log("Dia eliminado = " + diaEliminado);
//.unshift() = Nos permite agregar un elemento al inicio de un arreglo y empuja los elementos
dias.unshift("Carlos");
console.log(dias);
//.splice() = Nos permite agregar elementos a un arreglo donde le especifiquemos
const amigos = ["Alejando", "Cesar", "Manuel"];
amigos.splice(1, 2, "Rafael", "Roberto");
console.log(amigos); 
//.slice() = Nos permite copiar una parte de un arreglo a otro. "Excluye una posicion en el 2 parametro"
const frutas = ["Uva", "Manzana", "Pera", "Naranja", "Mandarina"];
const frutasFavoritas = frutas.slice(0,2);
console.log(frutasFavoritas);
//Asi como todos estos metodos hay aun mas sin embargo ya los vi anteriormente
//Tambien hay que aclarar que existen metodos para cadenas los cuales tambien ya vi :)