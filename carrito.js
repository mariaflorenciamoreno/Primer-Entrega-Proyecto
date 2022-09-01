const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
/*const productos = [
    {id: 1, titulo:"Ambo Salmon" , precio: 3799, stock: 3,img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/e891e6c2-cefe-4471-9dc6-ec0ee4970ba9_nube-099f9a0b2c59c6ee8716068676169850-320-0.jpg"},
    {id: 2, titulo:"Ambo Celeste" , precio: 4499, stock: 5, img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/2bd20ea9-e811-44c6-b2de-6a9c0e223d91_nube-94cf50223646dad13b16076020098807-320-0.jpg"},
    {id: 3, titulo:"Ambo Bordo" , precio: 3499, stock: 9, img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/01e937ef-f12a-4641-9abb-6e71e24f09dd_nube-21f081eb706e441f5216070174044578-320-0.jpg"},
    {id: 4, titulo:"Ambo Flores" , precio: 3899, stock: 8, img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/b1e8e88f-1b3d-4579-98fb-4fd4200fe3a7_nube-9acd49c1872c130ad916133124012181-320-0.jpg"}
]*/
let contadorProd = 0
       /* if(productos[0].stock>0)
        {
            total = total + productos[0].precio
            productos[0].stock = productos[0].stock - 1
            contadorProd = contadorProd + 1
            console.log("Productos seleccionados: "+ contadorProd +"\n" +"total a pagar: $"+ total)
           
            guardarLocal("listaProductos",JSON.stringify(productos[0]))
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
            console.log("Productos seleccionados: "+
             contadorProd +"\n" +"total a pagar: $"+ total)
             guardarLocal("listaProductos",JSON.stringify(productos[1]))
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
            guardarLocal("listaProductos",JSON.stringify(productos[2]))
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
            guardarLocal("listaProductos",JSON.stringify(productos[3]))
        }
        else
        {
            let sinStock = document.getElementById("boton4");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    } */
    fetch('./productos.json')
        .then( (resp) =>resp.json())
        .then( (productos) => {
        let cards = "";
        productos.forEach((producto) => {
            const idButton = `add-cart${producto.id}`
                document.getElementById("seccion-card").innerHTML +=`<div  class="promo1 col-s-12 col-md-6 col-lg-6 justify-content-center">
                <div class="d-flex justify-content-center col-s-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <div class="promo1">
                  <img class="card-img-top " style="width: 249px;heigth: 249px" src="${producto.img}" alt=""AmboCelesteYAzul"" />
                  <div class="text-center">
                  <h5 class="fw-bolder fs-20">${producto.titulo}</h5>
                  $${producto.precio}
                  </div>
                    <button class="btn btn-outline-secondary" id="${idButton}">Añadir</button>
                  </div>
               </div>`
            }) 
    })
function agregarAlCarrito (){ 
    fetch('./productos.json')
    .then( (resp) =>resp.json())
    .then( (productos) => {
    productos.forEach((producto)=> {
        const idButton = `add-cart${producto.id}`
        document.getElementById(idButton).addEventListener('click', () => {
    
            carrito.push(producto)
            localStorage.setItem("carrito",JSON.stringify(carrito))
            const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
            document.getElementById("cards-modal").innerHTML = ""
           carrito.forEach((producto) => {
                 document.getElementById("cards-modal").innerHTML += `
                    <tr>
                        <td><img src = "${producto.img}" style="width:50px"</td>
                        <td>${producto.id}</td>
                        <td>${producto.titulo}</td>
                        <td>${producto.precio}</td>
                        <td><button type="button" class="btn-close"> X </button></td>
                    <br>
                    </tr>
                `
            })
            Toastify({
                text: `Se ha añadido ${producto.titulo}`,
                duration: 3000,
                destination: "",
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} 
              }).showToast();
        })
    })
    })}
 agregarAlCarrito()
