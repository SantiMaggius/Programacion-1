//esta funcion solo se enfocara en el calculo
function calcular(dato1,dato2)
{
    const resultado = dato1 * dato2;
    return resultado
}
/* solose enfocara en recolectar los
datos y entregarlos a la funcion calcular()
*/
function mostrar()
{
    //forma 1
    const dato1 = document.querySelector("#inp_dato1").value

    //forma 2
    const dato2 = document.getElementById("inp_dato2").value

    //ejecutamos e invocamos a la funcion
    const respuesta = calcular(dato1,dato2)  

    document.getElementById("h_resultado").textContent = respuesta

} 