const flecha = () =>
{
    const framework = 
    { 
        titulo: 'Framework utilizado en la actualidad',
        nombre: 'Angular',
        características: 
        {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
        },
    }   

    const {lenguaje, patron, spa} = framework.características 
    const {titulo, nombre} = framework

    console.log(`
        caracteristicas: ${lenguaje} ${patron} ${spa}
        framework: ${titulo} ${nombre}
    `)
}
document.getElementById("boton").addEventListener("click",flecha)
