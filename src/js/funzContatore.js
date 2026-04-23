// FUNZIONE INCREMENTA CONTATORE
export function incrementa(counter, box, alert) {
    counter++;
    box.textContent = counter;
    if (counter >= 20) {
        box.style.color = "red";
        box.style.fontSize = "10rem";
        alert.textContent = "OVERLOAD"
        alert.style.color = "red";
    }
    return counter;
}

// FUNZIONE DECREMENTA CONTATORE
export function decrementa(counter, box, alert){
    counter--;
    box.textContent = counter;
    if (counter < 20) {
        box.style.color = "";
        box.style.fontSize = "";
        alert.textContent = ""
        alert.style.color = "";
    }
    return counter;
}

// FUNZIONE RESET
export function reset(counter, box){
    counter = 0;
    box.textContent = counter;
    box.style.color = "";
    box.style.fontSize = ""
    return counter;
}

// return counter perchè la funzione deve sempre restituirmi il counter