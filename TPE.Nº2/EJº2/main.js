
let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']

criptos.unshift("Stellar")
console.log(criptos)


const posicion = 8;
const NumeroElemento = 2;
const elementoeliminado = criptos.splice(posicion,NumeroElemento,)
console.log(elementoeliminado)
console.log(criptos)

criptos.push('Gate')
console.log(criptos)

const arreglo = () =>
{
    const longitud = criptos.length
    document.getElementById("parrafo1").textContent = 'longitud del arreglo: '+longitud

    const ultimo = criptos[longitud-1]
    document.getElementById("parrafo2").textContent = 'ultimo elemento: '+ultimo

    const Helium = criptos.indexOf('Helium')
    document.getElementById("parrafo3").textContent = 'indice obtenido: '+criptos[Helium]
}

document.getElementById("btn_mostrar").addEventListener("click",arreglo)

 const tablas = () => 
{

    let items = []
    criptos.forEach(element => { 

        let li = `<li class="list-group-item">${element}</li>`
        items.push(li)
        
    }); 
    document.getElementById("list_user").innerHTML = items.join('')
    
}

document.getElementById("btn_boton").addEventListener("click",tablas)