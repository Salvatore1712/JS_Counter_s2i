# JavaScript Counter - Progetto corso Start2Impact
<img src="./assets/img/logo_counter.svg"><br>
## Descrizione
Questo progetto è stato realizzato come esercizio di corso: l'obiettivo principale era costruire un **contatore in JavaScript** e arricchirlo con funzionalità aggiuntive.

L'app permette di:
- incrementare il valore del contatore;
- decrementare il valore del contatore;
- resettare il contatore a `0`;
- cambiare colore del testo della pagina;
- attivare/disattivare lo sfondo (toggle classe CSS).

## Tecnologie usate
- HTML5
- SCSS (Sass)
- JavaScript (moduli ES)

## Struttura del progetto
```text
JS_Counter_s2i/
├─ index.html
├─ README.md
├─ assets/
│  └─ img/
├─ src/
│  ├─ js/
│  │  ├─ contatore.js
│  │  ├─ funzContatore.js
│  │  └─ cambio_colore.js
│  └─ scss/
│     ├─ main.scss
│     ├─ pages/_home.scss
│     ├─ components/
│     ├─ layout/
│     ├─ base/
│     └─ abstract/
├─ dist/
│  └─ css/
└─ package.json
```

## Logica JavaScript

### 1) `contatore.js` (gestione UI + eventi)
Questo file è il punto di ingresso del contatore:
- aspetta il caricamento del DOM con `DOMContentLoaded`;
- seleziona i nodi principali (`.main__counter`, `.main__button`, `.messaggio__text`);
- inizializza la variabile `contatore` a `0` e aggiorna la UI;
- crea dinamicamente 3 bottoni (`+`, `-`, `RESET`);
- associa gli `addEventListener("click", ...)` ai bottoni;
- delega la logica delle operazioni alle funzioni importate da `funzContatore.js`.

In pratica, `contatore.js` si occupa di orchestrare interfaccia e interazioni.

### 2) `funzContatore.js` (logica del contatore)
Contiene tre funzioni esportate:

- `incrementa(counter, box, alert)`:
  - aumenta il contatore di 1;
  - aggiorna il contenuto del box;
  - se il valore arriva a `>= 20`, mostra stato "OVERLOAD" con stile rosso e testo ingrandito.

- `decrementa(counter, box, alert)`:
  - diminuisce il contatore di 1;
  - aggiorna il box;
  - se il valore torna sotto `20`, ripristina stile e messaggio normale.

- `reset(counter, box)`:
  - imposta il contatore a `0`;
  - aggiorna il box;
  - resetta gli stili applicati al contatore.

Ogni funzione **restituisce il nuovo valore** del contatore per mantenere lo stato sincronizzato in `contatore.js`.

### 3) `cambio_colore.js` (funzioni extra)
Questo file gestisce le funzionalità aggiuntive:
- seleziona i "selettori colore" laterali (`rosso`, `giallo`, `celeste`, `bianco`);
- al click, modifica `document.body.style.color`;
- configura il bottone `.remove__background`;
- al click del bottone esegue `document.body.classList.toggle("bg-off")`.

La classe `.bg-off` è definita in `src/scss/pages/_home.scss` e sostituisce lo sfondo, creando l'effetto di rimozione/inserimento.

## Note finali
- Il progetto usa approccio modulare per separare:
  - gestione DOM/eventi (`contatore.js`)
  - logica applicativa (`funzContatore.js`)
  - feature accessorie (`cambio_colore.js`)
- Questo rende il codice più leggibile, riusabile e semplice da mantenere.
