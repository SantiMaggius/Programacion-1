//dejo configurado el export
import Producto from "./producto.js";


function guardar()
{
    let descripcion=document.getElementById("descripcion").value
    let precio=document.getElementById("precio").value
    let categoria=document.getElementById("categoria").value

    let producto=new Producto(descripcion,precio,categoria)

    //invocamos(ejecutamos) el metodo guardar_producto, perteneciente a la xlase prdocuto
    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener('click',guardar)

function listar(){
    let producto=new Producto()
    producto.obtener_productos()
}
listar()

function eliminar()
{
    let indice = localStorage.getItem("indice")
    //creamos una instancia para 
    //acceder a los metodos y atributos de la clase Producto
    let prodocuto = new Producto()

    //haciendo uso de la instancia
    //invocamos el metodo eliminar_producto()
    prodocuto.eliminar_producto(indice)
} 
document.getElementById("btn-eliminar").addEventListener("click",eliminar)



function actualizar()
{
    let producto = new Producto()
    producto.actualizar_producto()
}

document.getElementById("btn_actualizar").addEventListener("click",actualizar)
