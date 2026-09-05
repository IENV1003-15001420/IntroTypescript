
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}


const alumno:Alumno={
    nombre:'Luis',
    apellido:'Romo',
    edad:22,
    email:'romo00@email.com'
}

console.table(alumno)

//arreglos
let mascotas=['perro','gato','perico']
console.log(mascotas)

mascotas[1]='nuevo gato' //sustituye
mascotas.push('leon')   //agregar uno nuevo
console.log(mascotas)

let tem:(number|string)[]=[] //arreglo que admite números y caracteres

tem.push(1)
tem.push('once')
console.log(tem)