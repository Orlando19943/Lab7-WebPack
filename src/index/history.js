import imagen1 from "../Imagenes/imagen1.jpg"
import imagen2 from "../Imagenes/imagen2.jpg"
import imagen3 from "../Imagenes/imagen3.jpg"
import imagen4 from "../Imagenes/imagen4.jpg"
import imagen5 from "../Imagenes/imagen5.jpg"
import imagen6 from "../Imagenes/imagen6.jpg"
import imagen7 from "../Imagenes/imagen7.jpg"
import imagen8 from "../Imagenes/imagen8.jpg"
import imagen9 from "../Imagenes/imagen9.jpg" 
import "../SASS/main.scss"



function page(pagina){
    localStorage.setItem("numero", pagina);
    window.open("../historia/historia.html");
}

document.getElementById("image1").src = imagen1
document.getElementById("image2").src = imagen2
document.getElementById("image3").src = imagen3
document.getElementById("image4").src = imagen4
document.getElementById("image5").src = imagen5
document.getElementById("image6").src = imagen6
document.getElementById("image7").src = imagen7
document.getElementById("image8").src = imagen8
document.getElementById("image9").src = imagen9

