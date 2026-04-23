//SELEZIONEE ELEMENTI
const colorRed = document.querySelector(".rosso");
const colorGialo = document.querySelector(".giallo")
const colorVerde = document.querySelector(".celeste")
const colorBianco = document.querySelector(".bianco");

const removeBg = document.querySelector(".remove__background")

// cambia colore testo in rosso
colorRed.addEventListener("click", ()=>{
    document.body.style.color = "red";
})

//cambia colore testo in giallo
colorGialo.addEventListener("click", ()=>{
    document.body.style.color = "yellow";
})

//cambio colore testo in colorVerde
colorVerde.addEventListener("click", ()=>{
    document.body.style.color = "";
})

//cambio colore testo in bianco
colorBianco.addEventListener("click", ()=>{
    document.body.style.color = "white";
})

//rimuovi sfondo
removeBg.textContent = "rimuovi bg";
removeBg.addEventListener("click", ()=> {
        document.body.classList.toggle("bg-off");
})