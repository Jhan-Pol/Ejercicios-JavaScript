//El caracol sube 7 pies cada dia y retrocede 2 pies cada noche
//Cuantos dias le tomara al caracol salir del pozo con la profundidad dada?
//----------------------------------------------------------------------
//Primera Opcion
//ALGORITMIA
// let i=0;
// let profundidad;
// let caminoDiaCompleto=7-2;
// addPro();
// operacion();
// //Functions
// function addPro() {
//     profundidad=parseInt(prompt("Digite la profundidad la cual subira el caracol"));
// }
// function operacion() {
//     for(let valor=0; valor<=profundidad; i++) {
//         valor+=caminoDiaCompleto;
//         document.write(`Dia ${i + 1}=${valor}`);
//     }
// }
//Segunda Opcion mas completo
//ALGORITMIA
let profundidad,
  i = 0;
// addPro();
// operacion();
//Functions
function addPro() {
  profundidad = parseInt(
    prompt("Digite la profundidad la cual subira el caracol")
  );
}
function operacion() {
  let contador = 0;
  for (let valor = 0; valor < profundidad; i++) {
    valor += 7;
    if (valor == profundidad) {
      let valor2 = valor - 7;
      document.write(`Dia ${i + 1}:${valor2}+7=${valor}`);
    } else {
      valor -= 2;
      document.write(`Dia ${i + 1}: ${contador}+7-2=${valor}`);
      contador += 5;
    }
  }
}
