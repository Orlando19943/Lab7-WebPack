/* import imagen1 from "../Imagenes/imagen1.jpg"
import imagen2 from "../Imagenes/imagen2.jpg"
import imagen3 from "../Imagenes/imagen3.jpg"
import imagen4 from "../Imagenes/imagen4.jpg"
import imagen5 from "../Imagenes/imagen5.jpg"
import imagen6 from "../Imagenes/imagen6.jpg"
import imagen7 from "../Imagenes/imagen7.jpg"
import imagen8 from "../Imagenes/imagen8.jpg"
import imagen9 from "../Imagenes/imagen9.jpg" */
import "../SASS/main.css"

function page(pagina){
    localStorage.setItem("numero", pagina);
    window.open("../historia/historia.html");
}

document.getElementById("image1").src = "../Imagenes/imagen1.jpg"
document.getElementById("image2").src = "../Imagenes/imagen2.jpg"
document.getElementById("image3").src = "../Imagenes/imagen3.jpg"
document.getElementById("image4").src = "../Imagenes/imagen4.jpg"
document.getElementById("image5").src = "../Imagenes/imagen5.jpg"
document.getElementById("image6").src = "../Imagenes/imagen6.jpg"
document.getElementById("image7").src = "../Imagenes/imagen7.jpg"
document.getElementById("image8").src = "../Imagenes/imagen8.jpg"
document.getElementById("image9").src = "../Imagenes/imagen9.jpg"

