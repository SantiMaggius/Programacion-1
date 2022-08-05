export default class Producto
{
    constructor(a,b,c,i){
        this.descripcion=a
        this.precio=b
        this.categoria=c
        this.imagen = i
    }


    guardar_coche()
    {
        let nuevo_coche={
            descripcion:this.descripcion,
           precio:this.precio,
           categoria:this.categoria,
           imagen:this.imagen
        }
        if("Productos" in localStorage){
             let lista_productos=JSON.parse( localStorage.getItem("Productos"))
             lista_productos.push(nuevo_coche)
             localStorage.setItem("Productos",JSON.stringify(lista_productos))
        }else{
             let lista_productos=[]
             lista_productos.push(nuevo_coche)
             localStorage.setItem("Productos", JSON.stringify(lista_productos))
        }

        this.obtener_productos()

        this.vaciar_formulario()
    }

    eliminar_producto(indice)
    {
       let lista_productos =  JSON.parse(localStorage.getItem("Productos"))

       lista_productos.splice(indice,1)

       localStorage.setItem("Productos",JSON.stringify(lista_productos))

       this.obtener_productos()
    }

    obtener_productos()
    {
       
       let lista_productos= JSON.parse(localStorage.getItem("Productos"))
       
       let filas = []
       lista_productos.forEach( (element,index) => {
           let fila = `
           <tr>
                <td>${index+1}</td>
                <td>
                    <img style="width:4rem" src="${element.imagen}"></img>
                </td>
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td>${element.categoria}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                        <i class="fa fa-trash"></i>
                    </button>

                    <button onclick="editar_formulario(${index})" class="btn btn-primary btn-sm">
                        <i class="fa fa-edit"></i>
                    </button>
                    
                </td>
           </tr>
           `
           filas.push(fila)
       });
       document.getElementById("tbody").innerHTML = filas.join('')
    }

    actualizar_producto()
    {

       let indice =  localStorage.getItem("indice")

       let lista_productos= JSON.parse( localStorage.getItem("Productos") )

       lista_productos[indice].descripcion = document.getElementById("descripcion").value
       lista_productos[indice].precio = document.getElementById("precio").value
       lista_productos[indice].categoria = document.getElementById("categoria").value

       localStorage.setItem("Productos", JSON.stringify(lista_productos))

       this.obtener_productos()

       this.vaciar_formulario()
    }

    vaciar_formulario()
    {
        document.getElementById("form_coches").reset() 
    }

}
