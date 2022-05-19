const consumir_datos = async () =>
{
    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const listas_usuarios = await datos_recibidos.json()

    let items = []

    listas_usuarios.forEach(element => {

        let li = `<li class="list-group-item">${element.name}</li>`
        items.push(li)
        
    });

    document.getElementById("list_user").innerHTML = items.join('')

}

consumir_datos()