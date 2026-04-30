// FUNZIONE INCREMENTA CONTATORE 

function incrementa(counter, box) {
    counter++;
    box.textContent = counter;
    if (counter >= 20) {
        box.style.color = "red";
        box.style.fontSize = "clamp(11rem, 11rem + 3dvw, 13rem)";
    }
    return counter;
}

// FUNZIONE DECREMENTA CONTATORE
function decrementa(counter, box){
    counter--;
    box.textContent = counter;
    if (counter < 20) {
        box.style.color = "";
        box.style.fontSize = "";
    }
    return counter;
}

// FUNZIONE RESET
function reset(counter, box){
    counter = 0;
    box.textContent = counter;
    box.style.color = "";
    box.style.fontSize = ""
    return counter;
}

// FUNZIONE +5
function piuCinque(counter, box) {
    counter += 5;
    box.textContent = counter;
    return counter;
}

// FUNZIONE +10
function piuDieci (counter, box){
    counter +=10;
    box.textContent = counter;
    return counter;
}


// return counter perchè la funzione deve sempre restituirmi il counter
