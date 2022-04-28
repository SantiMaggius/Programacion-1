let lenguajes = ['Python','JavaScript','Csharp','C++','Java','PHP','Ruby']


function mostrar_consigna1()
{
    const longitud = lenguajes.length
    console.log('longitud del arreglo: '+longitud)

    const primer = lenguajes[longitud-1]
    console.log('ultimo elemento: '+primer)

    const ultimo = lenguajes[2]
    console.log('tercer elemento: '+ultimo)
}


function recorrer(){
    lenguajes.forEach( (Element,index) => {
        console.log(index+'-'+Element)
    });
}



lenguajes.push("Gos")
console.log(lenguajes)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift("Kotlin")
console.log(lenguajes)

const posicion = 4;
const NumeroElemento = 2
const elementoeliminado = lenguajes.splice(posicion,NumeroElemento)
console.log(elementoeliminado)
console.log(lenguajes)
