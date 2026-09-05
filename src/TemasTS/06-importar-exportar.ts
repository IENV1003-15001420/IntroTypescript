
import {type Producto, calcularISV2} from './05-desestructuracion-funciones'


const carrito:Producto[]=[
    {
        desc:"Telefono 1",
        precio:1000
    },
    {
        desc:"Telefono2",
        precio:2000
    },
    {
        desc:"Telefono3",
        precio:3000
    }
]
const [total,isv2]=calcularISV2(carrito);
console.log("Total Carrito: ",total);
console.log("ISV Carrito: ",isv2);