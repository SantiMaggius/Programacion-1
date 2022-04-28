const calcular = (a,b,c) => 
{
    const grados = parseInt(a)+parseInt(b)+parseInt(c)
    let mensaje = (grados == 180) ? "es un triangulo" : "no es un triangulo";
    return grados+mensaje
 
}



const mostrar = () => {

       const a =  document.getElementById("a").value
       const b =  document.getElementById("b").value
       const c =  document.getElementById("c").value
       const respuesta = calcular(a,b,c)

       document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")

boton.addEventListener("click",mostrar)





