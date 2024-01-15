//Programa para determinar si un número dado por el usuario es positivo o negativo
// let numero = parseInt(prompt("Digite un numero"));
// verificar(numero);
// function verificar(numero) {
//     if(numero>=0) {
//         console.log("El numero introducido es positivo :)");
//     }
//     else {
//         console.log("El numero introducido es negativo");
//     }
// }
//-------------------------------------------------------------------------------------------
//Programa que calcule el resto de cualquier división entera
// let numero = parseInt(prompt("Digite el numero a dividir"));
// let divisor = parseInt(prompt("Digite el divisor"));
// division(numero, divisor);
// function division(numero, divisor) {
//     let resto =numero % divisor;
//     console.log("El resto de la division es: " + resto);
// }
//--------------------------------------------------------------------------------------------
//Introducir tres números por teclado, hallar el promedio de los tres números, la suma y desplegar del primer 
//número el doble, del segundo número el triple y del tercer número el cuadrado
// let num1 = parseFloat(prompt("Introduzca el primer numero"));
// let num2 = parseFloat(prompt("Introduzca el segundo numero"));
// let num3 = parseFloat(prompt("Introduzca el tercer numero"));
// promedio(num1, num2, num3);
// function promedio(num1, num2, num3) {
//     let promedio = parseFloat((num1 + num2 + num3) / 3);
//     console.log(`El promedio de los tres numeros es: ${promedio}`);
// }
//---------------------------------------------------------------------------------------------
//Introducir tres números por teclado mostrar los últimos dígitos de cada número.
// let num1 = prompt("Digite el primer numero");
// let num2 = prompt("Digite el segundo numero");
// let num3 = prompt("Digite el tercer numero");
// traspaso(num1);
// traspaso(num2);
// traspaso(num3);
// function traspaso(variable) {
//     var traspaso = variable.toString();
//     var tamaño = traspaso.length;
//     for(let i = 0; i < tamaño; i++) {
//         console.log(traspaso[tamaño - 1]);
//     }
// }
//------------------------------------------------------------------------------------------------
// Desarrollar un algoritmo que lea dos números, e indique si la suma de los dos números es par, caso contrario 
//visualizar la suma es impar
// let num1 = parseInt(prompt("Digite el primer numero"));
// let num2 = parseInt(prompt("Digite el segundo numero"));
// const operacion = (num1, num2) => {
//     let suma;
//     suma = num1 + num2;
//     if(suma % 2 ==0) {
//         console.log(`La suma (${suma}) es par`);
//     }
//     else {
//         console.log(`La suma (${suma}) es impar`);
//     }
// };
// operacion(num1, num2);
//--------------------------------------------------------------------------------------------------
//Desarrolle el código fuente de un programa que permita ingresar cuatro notas sobre 20 con decimales, obtener 
//su promedio y visualizar <APROBADO>,si su promedio es mayor a 14.5; caso contrario su promedio sea menor a 14.5
// y mayor a 10 visualizará <SUPLETORIO>. Si la nota promedio es menor a 10 mostrará <PERDIDO EL AÑO>
const operacion = (nota1, nota2) => {
    let promedio = parseFloat((nota1 + nota2) / 2);
    if(promedio > 14.5) {
        console.log("APROBADO");
    }
    else if((promedio < 14.5) && (promedio >= 10.0)) {
        console.log("SUPLETORIO");
    } else {
        console.log("Ha perdido el año");
    }
}
const distinguir = (nota1, nota2, callback) => {
if((nota1 <= 20.0) && (nota2 <= 20.0) && (nota1 >= 0.0) && (nota2 >= 0.0)) {
    callback(nota1, nota2);
} else {
    console.log("Introduzca valores menores de 20.0 y mayores de 0.0");
}
}
let nota1 = parseFloat(prompt("Digite la primera nota"));
let nota2 = parseFloat(prompt("Digite la segunda nota"));
distinguir(nota1, nota2, operacion);



