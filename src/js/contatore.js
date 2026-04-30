
document.addEventListener("DOMContentLoaded", function(){
    // SELEZIONE ELEMENTI
    const counterText = document.querySelector(".main__counter__text") // TESTO CONTATORE
    const buttonBox = document.querySelector(".main__button") //BOX PER BOTTONI
    const buttonBoxReset = document.querySelector(".main__button__reset") //BOX PER BOTTONE RESET
    const boxExtraButton = document.querySelector(".extra") //BOX PER MOLTIPLICATORI
    const punteggioText = document.querySelector(".punteggio__score") //TESTO PUNTEGGIO


    // CONTATORE
    let contatore = 0;
    counterText.textContent = contatore;
    counterText.classList.add("main__counter__text");

    //PUNTEGGIO MASSIMO
    let punteggioMax = Number(localStorage.getItem("punteggioMax")) || 0;
    punteggioText.textContent = punteggioMax;

    function aggiornaPunteggioMax() {
        if (contatore > punteggioMax) {
            punteggioMax = contatore;
            localStorage.setItem("punteggioMax", punteggioMax);
            punteggioText.textContent = punteggioMax;
        }
    }
    

    //CREAZIONE BOTTONI
    const btnIncrementa = document.createElement("button") //BOTTONE INCREMENTA
    const btnDecrementa = document.createElement("button") //BOTTONE DECREMENTA
    const btnReset = document.createElement("button") // BOTTONE RESET
    const btnPiuCinque = document.createElement("button") // +5 BOTTONE
    const btnPiuDieci = document.createElement("button") // +10 BOTTONE
    //AGGIUNTA CLASSE SU BOTTONI
    btnDecrementa.classList = "btn";
    btnIncrementa.classList = "btn";
    btnReset.classList = "reset";
    btnPiuCinque.classList = "btn";
    btnPiuDieci.classList = "btn";
    //INSERIMENTO TESTO BOTTONI
    btnIncrementa.textContent = "INCR";
    btnDecrementa.textContent = "DECR";
    btnReset.textContent = "RESET";
    btnPiuCinque.textContent = "+5";
    btnPiuDieci.textContent = "+10";

    //AGGIUNTA BTN NEL BOX
    buttonBox.append(btnDecrementa, btnIncrementa);
    buttonBoxReset.append(btnReset)
    boxExtraButton.append(btnPiuCinque, btnPiuDieci)

    //AGGIUNTA LOGICA BOTTONI
    // incrementa
    btnIncrementa.addEventListener("click", ()=> {
        contatore = incrementa(contatore, counterText);
        aggiornaPunteggioMax();
    })

    //decrementa
    btnDecrementa.addEventListener("click", ()=> {
        contatore = decrementa(contatore, counterText)
    })

    //reset
    btnReset.addEventListener("click", ()=> {
        contatore = reset(contatore, counterText);
    })

    // +5
    btnPiuCinque.addEventListener("click", ()=> {
        contatore = piuCinque(contatore, counterText)
        aggiornaPunteggioMax();
    })

    // +10
    btnPiuDieci.addEventListener("click", ()=>{
        contatore = piuDieci(contatore, counterText)
        aggiornaPunteggioMax();
    })
})
