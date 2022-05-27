const obtener = async () =>
{
    //hacemos una peticion osolicitud http para obtener los productos de la API de FakeStore
    const productos = await fetch('https://fakestoreapi.com/products')
    
    const productos_definitivos = await productos.json()

    let columnas = []

    productos_definitivos.forEach(element => {

        let columna= `
            <div class="col-lg-3">

                <div class="card">
                    <img height="300" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.title}/h5>
                    <p class="card-text">${element.price}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>

            </div>
        `

        columnas.push(columna)
        
    });

    document.getElementById("catalogo").innerHTML = columnas.join('')

}


//invoca la funcion
obtener()