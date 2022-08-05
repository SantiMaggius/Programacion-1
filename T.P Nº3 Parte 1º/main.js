import Producto from "./productos.js";


function guardar()
{
    let descripcion=document.getElementById("descripcion").value
    let precio=document.getElementById("precio").value
    let categoria=document.getElementById("marcas").value
    let imagen=document.getElementById("imagen").value

    let producto=new Producto(descripcion,precio,categoria,imagen)

    producto.guardar_coche()
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
    let prodocuto = new Producto()

    prodocuto.eliminar_producto(indice)
} 
document.getElementById("btn-eliminar").addEventListener("click",eliminar)



function actualizar()
{
    let producto = new Producto()
    producto.actualizar_producto()
}

document.getElementById("btn_actualizar").addEventListener("click",actualizar)