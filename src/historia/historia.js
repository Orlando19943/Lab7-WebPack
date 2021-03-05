import "./historia.scss"
import {page} from "../util/text"
window.onload = function (){
    var pagina = localStorage.getItem("numero");  
    console.log(pagina);
    page(pagina);
}

document.getElementById("P1").onclick = function() {page(1)};
document.getElementById("P2").onclick = function() {page(2)};
document.getElementById("P3").onclick = function() {page(3)};
document.getElementById("P4").onclick = function() {page(4)};
document.getElementById("P5").onclick = function() {page(5)};
document.getElementById("P6").onclick = function() {page(6)};
document.getElementById("P7").onclick = function() {page(7)};
document.getElementById("P8").onclick = function() {page(8)};
document.getElementById("P9").onclick = function() {page(9)};


const f1 = (a,b) => a+b;


