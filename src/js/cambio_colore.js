//SELEZIONEE ELEMENTI

document.addEventListener("DOMContentLoaded", ()=> {
    const btnLightMode = document.querySelector(".light__mode"); //BOTTONE
    const boxContainer = document.querySelector(".container");
    const imgBtnLight = document.querySelector(".light__mode__image")

    //TESTO NEL BOTTONE LIGHT MODE
    btnLightMode.textContent = "LIGHT MODE";

    //LOGICA CLICK BOTToNE LIGHT MODE
    btnLightMode.addEventListener("click", (event)=>{
        document.body.classList.toggle("light_style");
        // boxContainer.classList.toggle("light");
        if (document.body.classList.contains("light_style")) {
            btnLightMode.textContent = "DARK MODE";
        } else btnLightMode.textContent = "LIGHT MODE"
    })
})