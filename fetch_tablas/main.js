const obtener_usuario = async () =>
{
    const usuario = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const usuarios_definidos = await usuario.json()

    let filas = []

    //recorrer los usuarios
    usuarios_definidos.forEach(element => {
    //
        let fila = 
        `<tr>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.mail}</td>
            <td>${element.phone}</td>
        </tr>`

    filas.push(fila)
        
    });

    document.getElementById("tbl_body").innerHTML = filas.join('')

}


//invocamos a la funcion
obtener_usuario()