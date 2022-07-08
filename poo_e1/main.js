//nos importamos la clase Trapecio que proviene del archivo trapecio.js
import Trapecio from "./trapecio.js";

function ejecutar()
{

    const base_mayor = document.getElementById(inp_bma).Value
    const base_menor = document.getElementById(inp_bme).Value
    const altura = document.getElementById(inp_h1).Value



    //creamos la instancia de la clase Trapecio
    const trapecio = new Trapecio(base_mayor,base_menor,altura)
    //mediante el uso de la instancia y/o ejecutamos el metodo
    trapecio.calcular_area_trap()

    document.getElementById("resultado").textContent = 'area trapecio:' + respuesta
}

document.getElementById("btn").addEventListener("click",ejecutar)