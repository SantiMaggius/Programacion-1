function almacenar_indice(index)
{
    localStorage.setItem("indice",index)
}
function editar_formulario(index)
{
   let lista_productos = JSON.parse(localStorage.getItem("Productos"))

   document.getElementById("descripcion").value = lista_productos[index].descripcion
   document.getElementById("precio").value = lista_productos[index].precio
   document.getElementById("categoria").value = lista_productos[index].categoria

   localStorage.setItem("indice",index)
 
   document.getElementById("btn_guardar").style.display = "none"
   document.getElementById("btn_actualizar").style.display = "block"
}

function almacenar_producto(index)
{
    let indice = localStorage.setItem("indice")
    let lista_productos = JSON.parse(localStorage.getItem("Productos"))
    lista_productos[indice].descripcion = document.getElementById("imp_descripcion")
}