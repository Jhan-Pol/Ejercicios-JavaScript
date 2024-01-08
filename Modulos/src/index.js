//NameSpace Imports 
// import * as datos from "./namedExports";
// const nombreImportado = "Miguel";
// console.log(`Mi nombre es ${nombreImportado}`);
// console.log(datos.obtenerPosts());
// console.log(datos.nombre);
//-------------------------------------------------------------
//Named Imports
// import {nombre as nombreImportado, obtenerPosts} from "./namedExports";
// const nombre = "Miguel";
// console.log(`Mi nombre es ${nombreImportado}`);
// console.log(`El nombre de mi amigo es ${nombre}`);
// console.log(`Los posts son ${obtenerPosts()}`);
//-------------------------------------------------------------
//Default Imports 
// import obtenerUsuarios from "./defaultExport";
// console.log(obtenerUsuarios());
//-------------------------------------------------------------
//Empty Imports 
import "./emptyImport";
import {correo} from "./emptyImport";
console.log(correo);