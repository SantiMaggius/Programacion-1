export default class Trapecio 
{
    //metodo que forma parte de la clase
    constructor(bma,bme,h1){
            this.base_mayor = bma
            this.base_menor = bme
            this.altura = h1
    }

    //creamos un nuevo metado   
    calcular_area_trap() {
        const resultado = ((Number(this.base_mayor) + (this.base_menor))/2) * this.altura
        return resultado
    }
}