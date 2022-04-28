const calcular = (dato1,dato2,dato3) => 
{
    const dentro_raiz = Math.pow(dato2,2) - (4*dato1*dato3);
    const raiz_cuadrada = Math.sqrt(dentro_raiz);

    const raiz1 = (-dato2 + raiz_cuadrada) / (2*dato1);
    const raiz2 = (-dato2 - raiz_cuadrada) / (2*dato1);

    return 'Raíz 1 = '+raiz1+' - Raíz 2 = '+raiz2;
}



const mostrar = () => {

       const a =  document.getElementById("a").value
       const b =  document.getElementById("b").value
       const c =  document.getElementById("c").value

       //ejecutar  o invocar a la funcion
       const respuesta = calcular(a,b,c)

       document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")

boton.addEventListener("click",mostrar)