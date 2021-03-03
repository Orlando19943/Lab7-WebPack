function page(pagina) {
    console.debug("entra")
    localStorage.setItem("numero", pagina);
    window.open("historia.html");
}
export {page};