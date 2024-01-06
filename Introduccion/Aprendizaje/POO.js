// class Book {
//     #price
//     constructor(tittle, author, price, stock, id) {
//         this.tittle=tittle;
//         this.author=author;
//         this.#price=price; 
//         this.stock=stock;
//         this.id=id;
//     }
//     getInfo() {
//         let info = `Titulo: ${ book1.tittle }, Autor: ${ book1.author }, Precio: ${ book1.price }`;
//         console.log(info);
//     }
// }
// const book1= new Book("Enanos", "Pool", 100, 100, 1); 
// //VISTA PARA VER QUE SE PUEDE MODIFICAR ALGUN METODO
// book1.price=20;
// console.log(book1);
// console.log(book1.getInfo());
//------------------------------------------------------------------------------------
//SIMULADOR DE ANIMALES Y SUS FUNCIONES
class Animal {
    constructor(color, tipo, pelo, altura, ambiente) {
        this.color=color;
        this.raza=tipo;
        this.pelo=pelo;
        this.altura=altura;
        this.ambiente=ambiente;
    }
}
class Gato extends Animal {
    constructor(color, tipo, pelo, altura, ambiente) {
        super(color,tipo, pelo, altura, ambiente);
    }
    mauyar() {
        console.log("Miauuuu");
    }
    getInfo() {
        let info=`El animal tiene un color ${this.color}, es ${this.altura}, y puede vivir en un ambiente ${this.ambiente}`;
        console.log(info);
    }
}
const gato=new Gato("Cafe", "Tipo leoncito", "Suave", "Bajito", "Cualquiera");
console.log(gato.getInfo());
class Perro extends Gato {
    constructor(color, tipo, pelo, altura, ambiente) {
        super(color, tipo, pelo, altura, ambiente);
    }
    ladrar() {
        console.log("WHAUU WHAUU");
    }
    getInfo() {
        super.getInfo();

        }
}
const perro=new Perro("Negro", "Doberman", "Grueso", "Mediano", "Cualquiera");
console.log(perro.getInfo());
class Jirafa extends Perro {
    constructor(color, tipo, pelo, altura, ambiente) {
        super(color, tipo, pelo, altura, ambiente);
    }
    comer() {
        console.log("La Jirafa estira la cabeza para alcanzar los frutos");
    }
    getInfo() {
    super.getInfo();
}
}
const jirafa= new Jirafa("Amarilla", "Exotico", "Liso", "Alta", "Tropical");
console.log(jirafa.getInfo());
console.log(jirafa.comer());
//--------------------------------------------------------------------------------------------------------------
//En esta sesion se trabajo con aspectos como las propiedades, herencia, polimorfismo y metodos 
