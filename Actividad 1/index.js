function sumar()
{
    /*forma 1
    const dato1 = document.queryselector("#inp_dato1").value
    const dato2 = document.queryselector("#inp_dato2").value*/
    

    
    /*forma 2*/ 
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value

    const resultado = parseInt(dato1) + parseInt(dato2)
    alert(resultado)
}