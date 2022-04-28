//crear un 
//creamos n rreglo de string
let series = ['breaking bad','Okupa','Narco','Casados con hijos','Peaking bliders']

//como conocer la longitud de arrey
const longitud = series.length
console.log('longitud del arreglo: '+longitud)

//como acceder a un elemento del arreglo haciendo uso del indice
const primer = series[0]
console.log('primer elemento: '+primer)

//como acceder al ultimo elemento
const ultimo = series[longitud-1]
console.log('ultimo elemento: '+ultimo)

//recorrer el arreglio utilizando foreach
series.forEach( (Element,index) => {
    console.log(index+'-'+Element)
});

//como gregar un elemento al final de arrey
series.push('Dragon ball')
console.log(series)

//como eliminr el ultimo elemento de un arreglo
series.pop()
console.log(series)

//como agregar un elemento al inicio del arreglo
series.unshift("grey's anatomy")
console.log(series)

//como eliminar el primer elemento del arreglo 
series.shift()
console.log(series)

//como obtener la posicion de un eleento del arreglo
const indice = series.indexOf("casados con hijos")
console.log('indice obtenido: '+indice)

//como eliminar un elemento teniendo encuenta su posicion
//1er caso - eliminar un unico elemento
series.splice(indice,1)
console.log(series)

//2do caso - eliminar varios elemeentos
const posicion = -1;
const NumeroElemento = -2
const elementoeliminado = series.splice(posicion,NumeroElemento,)
console.log(elementoeliminado)
console.log(series)

//copiar un array
let copia = series.slice()
copia.push("dragon ball")
console.log(copia)
console.log(series)