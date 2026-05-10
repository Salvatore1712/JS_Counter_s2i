

document.addEventListener("DOMContentLoaded", ()=> {
    //SELEZIONE ELEMENTI
    const btnLightMode = document.querySelector(".light__mode"); //BOTTONE

    //TESTO NEL BOTTONE LIGHT MODE
    btnLightMode.textContent = "LIGHT MODE";

    //LOGICA CLICK BOTTONE LIGHT MODE
    btnLightMode.addEventListener("click", (event)=>{
        document.body.classList.toggle("light_style");
        // boxContainer.classList.toggle("light");
        if (document.body.classList.contains("light_style")) {
            btnLightMode.textContent = "DARK MODE";
        } else btnLightMode.textContent = "LIGHT MODE"
    })
})