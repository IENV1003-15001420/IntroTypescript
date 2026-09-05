
export interface Producto{
    desc:string;
    precio:number
}

const telefono:Producto={
    desc:"Samsung S25 Ultra",
    precio:18000
}
const laptop:Producto={
    desc:"Laptop Dell G15",
    precio:12500
}

/*function calcularISV(productos:Producto[]):number{
    let total=0
    for(const producto of productos){
        total+=producto.precio
    }
    return total*0.15
}

const isv=calcularISV(articulos)
console.log("ISV: ",isv)*/

//desestructuracion de funciones

export function calcularISV2(productos:Producto[]):[number,number]{
    let total=0
    for(const producto of productos){
        total+=producto.precio
    }
    return [total,total*0.15];
}
const articulos=[telefono,laptop]
const [total,isv2]=calcularISV2(articulos);
console.log("Total: ",total)
console.log("ISV2: ",isv2)