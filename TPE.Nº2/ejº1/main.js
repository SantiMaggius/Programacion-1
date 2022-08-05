const obtener = async () =>
{
    const productos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    
    const productos_definitivos = await productos.json()

    let columnas = []

    productos_definitivos.forEach(element => {

        let columna= `
            <div class="col-lg-3">
                <div class="card">
                    <h5 class="card-title">${element.casa.compra}</h5>
                    <div class="card-body">
                    <h5 class="card-title">${element.casa.venta}</h5>
                    <p class="card-text">${element.casa.agencia}</p>
                    <p class="card-text">${element.casa.nombre}</p>
                    <p class="card-text">${element.casa.variacion}</p>
                    <p class="card-text">${element.casa.ventaCero}</p>
                    <p class="card-text">${element.casa.decimales}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `
        columnas.push(columna)        
    });
    document.getElementById("catalogo").innerHTML = columnas.join('')
}
obtener()