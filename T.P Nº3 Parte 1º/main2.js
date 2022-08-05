obtener_productos()
    {
       
       let lista_productos= JSON.parse(localStorage.getItem("Productos"))
       
       let filas = []
       lista_productos.forEach( (element,index) => {
           let fila = 

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

    document.getElementById("tbody").innerHTML = filas.join('')
    } 
}

