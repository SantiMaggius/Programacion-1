let consolas = ['PlayStayon','Xbox','Nintendo Gamecube','Sega DreamCast','Game Boy Advance']

const posicion = 2;
const NumeroElemento = 2;
const elementoeliminado = consolas.splice(posicion,NumeroElemento,)
console.log(elementoeliminado)
console.log(consolas)

consolas.push('Nintendo 64')
console.log(consolas)

consolas.unshift('Nintendo WI')
console.log(consolas)

const arreglo = () =>
{
    const longitud = consolas.length
    document.getElementById("parrafo1").textContent = 'longitud del arreglo: '+longitud

    const ultimo = consolas[longitud-1]
    document.getElementById("parrafo2").textContent = 'ultimo elemento: '+ultimo

    const Xbox = consolas.indexOf('Xbox')
    document.getElementById("parrafo3").textContent = 'indice obtenido: '+consolas[Xbox]
}

document.getElementById("btn_mostrar").addEventListener("click",arreglo)
////
function tablas()
{
    const usuario = await fetch (consolas)
    
    const consolas_definidos = await usuario.json()

    let filas = []

    criptos_definidos.forEach(element => {
    //
        let fila = 
        `<tr>
            <td>${element.name}</td>
            <td>${element.symbol}</td>
        </tr>`

    fila.push(filas)})
}