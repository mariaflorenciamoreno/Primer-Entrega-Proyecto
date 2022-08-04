class Prod {
    constructor(id, prod, precio, stock) {
        this.id = id;
        this.prod = prod;
        this.precio = precio;
        this.stock = stock;
    }
}
const productos = [];
productos.push(new Prod(1, "Ambo1" , 3799, 3));
productos.push(new Prod(2, "Ambo2" , 4499, 5));
productos.push(new Prod(3, "Ambo3" , 3499, 9));
productos.push(new Prod(4, "Ambo4" , 3899, 12));
console.log("productos"); 
function elemento(producto, id)
    {
        return productos.find(objeto => objeto.id === id);
    }
let opcion = prompt("Ingrese 1 para comenzar a comprar")
    while (opcion != 'ESC') 
        {
            switch (opcion) 
                {
                    case "1":
                        let user = elemento(productos, parseInt(prompt('Ingrese en ID del ambo que desea comprar')))
                        if(user != undefined)    
                        {
                            if(user.stock > 0) {
                                prod = user.prod
                                precio = user.precio
                                stock = user.stock - 1
                                user.stock = stock                   
                            }
                            else{
                                alert("Ya no hay stock!")
                            }    
                        }
                        else
                            {
                                opcion = prompt('Presione 1 si desea seguir comprando');
                            }
                        break;
                        default:
                        opcion=prompt("Ingrese 1 para volver a elegir");
                        break;
                        } 
            
                        console.log("producto seleccionado " + prod)
                        console.log("precio del producto: $"+precio)
                        console.log("stock disponible "+stock)
                    }