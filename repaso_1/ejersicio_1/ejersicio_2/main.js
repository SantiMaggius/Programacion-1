function calcular(dato1)
{
    maji = (dato1 * 1.8)+32
    return 'ressultado='+ maji
  
}

function mostrar()
{    
    const dato1 = document.querySelector("#inp_dato1").value
    
    const respuesta = calcular(dato1)  

    document.getElementById("h_resultado").textContent = respuesta
} 