export default class Batman 
{
    constructor (){

    }

    async consumir_api()
    
    {
        const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const datos_def = await datos.json() 

        let columnas = []
    
        for(const element of datos_def.Search){

            let columna= `
            <div class="col-lg-3">

                <div class="card">
                    <img height="300" src="${element.Poster}">
                    <h5 class="card-title">${element.Title}/h5>
                    <p class="card-text">${element.Year}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>

            </div>
        `

        columnas.push(columna)
        }

        document.getElementById("peliculas").innerHTML = columnas.join('')
    
    
    }
}