export default class Batman 
{
    constructor (){

    }

    async consumir_api()
    {
        const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const datos_def = await datos.json() 
    
        for(const element of datos_def.Search){
            console.log(`
                ${element.Title}
                ${element.Year}
            `)
        }
    
    
    }
}