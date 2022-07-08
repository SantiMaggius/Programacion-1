const tareas = [
    {
        nombre:'testeando soft',
        duracion:25
    },
    {
        nombre:'Implementacion de alta cliente',
        duracion:90
    },
    {
        nombre:'Actualizar cliente',
        duracion:40
    },
    {
        nombre:'desploy de soft',
        duracion:120
    },
    {
        nombre:'correccion del bug',
        duracion: 180
    }
]
//uso del metodo map()
let nombres = []
tareas.forEach(Element =>{
    nombres.push(Element.nombre)
});

//aplicando el metodo map()
let nombres2 = tareas.map(tarea => {
     return tarea.nombre
})
/*let nombres2 = tareas.map(tarea => tareas.nombre)
otra forma*/

/** 
 * usos de filter
 */
let tareas_prolongadas = []
tareas.forEach(element => {
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }
});
console.log (tareas_prolongadas)

//filtrar haciendo uso del metodo filter
const tareas_prolongadas2 = tareas.filter( tarea => tareas.duracion >= 102)
console.log (tareas_prolongadas2)
