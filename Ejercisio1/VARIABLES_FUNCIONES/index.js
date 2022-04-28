
function mostrar_mensaje() {
    alert('probando mi funciòn')
}
function mostrar_en_consola(){
    /*asignamos una cadena de string en una constante*/
    const nombre_apellido = 'Maggi Santino'
    /* forma 1 - sin templete string */
    console.log('nombre y apellido: '+nombre_apellido)
    /* forma 2 */
    console.log(`
    nombre y apellido: ${nombre_apellido} 
    DNI: 46482621
    direcciòn: tu vieja 
    `)
}
//  condicion - forma 1
 function validar(){
     const calificacion = prompt('ingresar su calificacion') 
     if(calificacion >= 7){
         alert("esta aprobado")
        } else {
         alert("esta desaprobado")   
        }
     // expecion terniario
  (calificacion >= 7 ) ? alert ('estas aprobado') : alert ('estas desaprobado')
 }
// funcion con retorno y comunicacion entre funciones
 function calcular()
 {
    const number = prompt('ingresa un numero:');
    const resultado = number * 10 
    // estamos entregando una respuesta
    return resultado
 }

 function visualizar()
 {
    const respuesta = calcular()
    alert(respuesta)
 }