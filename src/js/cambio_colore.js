//SELEZIONEE ELEMENTI
const btnLightMode = document.querySelector(".light__mode") //BOTTONE
const boxContainer = document.querySelector(".container")

btnLightMode.addEventListener("click", (event)=>{
    document.body.classList.toggle("light_style");
    // boxContainer.classList.toggle("light");
})