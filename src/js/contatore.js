import * as funzioni from "./funzContatore.js";


document.addEventListener("DOMContentLoaded", function(){
    // SELEZIONE ELEMENTI
    const counterBox = document.querySelector(".main__counter") // BOX CONTATORE
    const buttonBox = document.querySelector(".main__button") //BOX PER BOTTONI
    const mexText = document.querySelector(".messaggio__text") //MESSAGGIO ALERT

    // CONTATORE
    let contatore = 0;
    counterBox.textContent = contatore;

    //CREAZIONE BOTTONI
    const btnIncrementa = document.createElement("button") //BOTTONE INCREMENTA
    const btnDecrementa = document.createElement("button") //BOTTONE DECREMENTA
    const btnReset = document.createElement("button") // BOTTONE btnRese
    //AGGIUNTA CLASSE SU BOTTONI
    btnDecrementa.classList = "btn";
    btnIncrementa.classList = "btn";
    btnReset.classList = "btn";
    //INSERIMENTO TESTO BOTTONI
    btnIncrementa.textContent = "+";
    btnDecrementa.textContent = "-";
    btnReset.textContent = "RESET";

    //AGGIUNTA BTN NEL BOX
    buttonBox.append(btnReset, btnDecrementa, btnIncrementa);

    //AGGIUNTA LOGICA BOTTONI
    // incrementa
    btnIncrementa.addEventListener("click", ()=> {
        contatore = funzioni.incrementa(contatore, counterBox, mexText)
    })

    //decrementa
    btnDecrementa.addEventListener("click", ()=> {
        contatore = funzioni.decrementa(contatore, counterBox, mexText)
    })

    //reset
    btnReset.addEventListener("click", ()=> {
        contatore = funzioni.reset(contatore, counterBox);
    })
})
