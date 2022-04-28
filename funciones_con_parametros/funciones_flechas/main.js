const calcular = (numero1,numero2) => 
{
const resultado = numero1 * numero2
    return resultado
}

const mostrar = () => 
{
    const dato1 = document.getElementById("dato1").value 
    const dato2 = document.getElementById("dato2").value
    
    // ejecutando la funciaon
   const resultado = calcular (dato1,dato2)

    document.getElementById("h_resultado").textContent = resultado
}

//encontrar u obtener un boton guardarlo en las constantes

const boton = document.getElementById("btn_calcular")

//agregamos un evento a escuchar, en este caso es "click"

boton.addEventListener("click",mostrar)
