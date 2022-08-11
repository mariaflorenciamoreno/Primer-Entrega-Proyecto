
const productos = [
    {id: 1, prod: "Ambo1", precio: 3799, stock: 3},
    {id: 2, prod: "Ambo2", precio: 4499, stock: 5},
    {id: 3, prod: "Ambo3", precio: 3499, stock: 9},
    {id: 4, prod: "Ambo4", precio: 3899, stock: 8}
]
/* function carrito() { 
    console.log("producto seleccionado " + prod)
    console.log("precio del producto: $"+precio)
    console.log("stock disponible "+stock)
}
carrito()
 */
/* function elemento(producto, id)
    {
        return productos.find(objeto => objeto.id === id);
    } */
/* let opcion = prompt("Ingrese 1 para comenzar a comprar")
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
                  Carrito()
                    } */
            
let boton
let contadorProd = 0
let total = 0
boton = document.getElementById("boton1")
boton.onclick = () => 
    {
        if(productos[0].stock>0)
        {
            total = total + productos[0].precio
            productos[0].stock = productos[0].stock - 1
            contadorProd = contadorProd + 1
            console.log("Productos seleccionados: "+ contadorProd +"\n" +"total a pagar: $"+ total)
        }
        else
        {
            let sinStock = document.getElementById("boton1");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
 boton = document.getElementById("boton2")
 boton.onclick = () => 
    {
        if(productos[1].stock>0)
        {
            total = total + productos[1].precio
            productos[1].stock = productos[1].stock - 1
            contadorProd = contadorProd + 1
            console.log("Productos seleccionados: "+ contadorProd +"\n" +"total a pagar: $"+ total)
        }
        else
        {
            let sinStock = document.getElementById("boton2");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
boton = document.getElementById("boton3")
boton.onclick = () => 
    {
        if(productos[2].stock > 0)
        {
            total = total + productos[2].precio
            productos[2].stock = productos[2].stock - 1
            contadorProd = contadorProd + 1
            console.log("Productos seleccionados: "+ contadorProd +"\n" +"total a pagar: $"+ total)
        }
        else
        {
            let sinStock = document.getElementById("boton3");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
boton = document.getElementById("boton4")
boton.onclick = () => 
    {
        if(productos[3].stock > 0)
        {
            total = total + productos[3].precio
            productos[3].stock = productos[3].stock - 1
            contadorProd = contadorProd + 1
            console.log("Productos seleccionados: "+ contadorProd +"\n" +"total a pagar: $"+ total)
        }
        else
        {
            let sinStock = document.getElementById("boton4");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }