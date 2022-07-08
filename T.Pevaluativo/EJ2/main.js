const calcular = (dato1) => 
{
    let resultado = null

    if (dato1 >=14 && dato1 <=32) 
    {
       resultado = "temperatura fria"
    } else 
        if (dato1 >32 && dato1<=68) 
        {
            resultado = "tmperatura ideal"
        }else{
            resultado = "temperatura desconocida"
        }
     
    return resultado
}

const mostrar = () => 
{
    const dato1 = document.getElementById("dato1").value 
    
    // ejecutando la funciaon
   const resultado = calcular (dato1)

    document.getElementById("h_resultado").textContent = resultado
}


