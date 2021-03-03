import {text} from "./historia"
import {title} from "./titulos"
function page(pagina){
    document.getElementById("titulo").innerHTML = title[pagina - 1];
    document.getElementById("historia").innerHTML = text[pagina - 1];
}

export {page};