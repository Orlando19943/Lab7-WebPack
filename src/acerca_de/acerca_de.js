
const row = document.createElement("div")
row.classList = "row"
const acerca_de = document.createElement("div")
const texto = document.createElement("p")
texto.classList = "text textB"
texto.innerText = "About time (cuestión de tiempo) es una película de comedía dramática y romántica británica de 2013 escrita y dirigida por Richard Curtis. En ella se cuenta la hisotira de Tim, un chico que no ha tenido suerte con las chicas. Un día, su padre le revela el mayor secreto de la familia. Dicho secreto lo usará Tim para poder obtener una novia. La pelicula deja varios mensajes y a mi parecer vale la pena darle una oportunidad. La película se encuentra actualmente en la plataforma de Netflix."

row.appendChild(acerca_de)
acerca_de.appendChild(texto) 
document.getElementById("textContainer").appendChild(row)
/* <div class="row">
            <div class="col-10">
                <div id = "acerca_de"> 
                    <p class = "text textB">
                      About time (cuestión de tiempo) es una película de comedía dramática y romántica británica de 2013
                      escrita y dirigida por Richard Curtis. En ella se cuenta la hisotira de Tim, un chico que no ha tenido suerte con las chicas.
                      Un día, su padre le revela el mayor secreto de la familia. Dicho secreto lo usará Tim para poder obtener una novia. La pelicula
                      deja varios mensajes y a mi parecer vale la pena darle una oportunidad. La película se encuentra actualmente en la plataforma 
                      de Netflix.
                    </p>
                </div>
            </div> 
        </div> */