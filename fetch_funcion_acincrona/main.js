async function obtener_datos()
{
    //fetch realiza una solicitud HTTP a traves del metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts')

    const datos_definitivos = datos.json()

    datos_definitivos.fore.ach(Element=> {
        console.log(Element,tittle)
    });
}