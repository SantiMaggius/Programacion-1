function calcular_area()
{
    const number1 = prompt('ingresa un numero:');
    const number2 = prompt('ingresa otro numero:');
    const altura = prompt('ingresar una altura:');
    const resultado = ((parseInt(number1) + parseInt(number2)) * altura) / 2 ;
    return resultado
}

function mostrar()
{
    const respuesta = calcular_area()
    alert(respuesta)
}