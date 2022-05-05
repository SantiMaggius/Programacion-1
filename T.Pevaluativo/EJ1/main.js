function descontar (auto)
{
    let resultado = null

    if(auto == 256000)
    {
       resultado = parseInt(256000) * 10 / 100
    } else {
        if (auto == 156000)
        {
            resultado = parseInt(156000) * 10 / 100
        }else{
          if  (resultado) 
          {parseInt(175000) * 10 / 100}
        }
          }
        

    return resultado
}

function mostrar()
{

    const auto = document.getElementById("slt_autos").value
   //ejecutando la funcion calcular
    const respuesta = descontar (auto)

    document.getElementById("h_resultado").textContent = h_resultado

}