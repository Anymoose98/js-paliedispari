// scelta pari o dispari
let scelta_giocatore = prompt("Scegli pari o dispari")

while (scelta_giocatore != "pari" && scelta_giocatore != "dispari") { 
    alert("Opzione non valida");
    scelta_giocatore = prompt("Scegli pari o dispari");
}
console.log(scelta_giocatore)


// scelta numero tra 1 e 5
let numero_giocatore
if(scelta_giocatore == "pari" || scelta_giocatore == "dispari"){
    numero_giocatore = prompt("scegli un numero da 1 a 5")
    while (numero_giocatore != 1 && numero_giocatore != 2 && numero_giocatore != 3 && numero_giocatore != 4 && numero_giocatore != 5) { 
        alert("Opzione non valida");
        numero_giocatore = prompt("scegli un numero da 1 a 5")
    }
}
numero_giocatore = parseInt(numero_giocatore)
console.log(numero_giocatore)


// creazione funzione per numeri randomici
function NumeriCasualiFinoA5(){
    return Math.floor(Math.random() * 5 + 1);
}
// creazione numeri randomici
let numero_pc = NumeriCasualiFinoA5()
console.log(numero_pc)


// somma dei numeri
let somma_numero = numero_pc + numero_giocatore
console.log(somma_numero)


// Funzione paro o disparo
function ParoODisparo(somma){
    if(somma %2 == 0){
        return "pari"
    }
    else{
        return "dispari"
    }
}
// Paro o disparo 
let risultato = ParoODisparo(somma_numero)
console.log(risultato)

// Dichiariamo il vincitore
if(risultato == scelta_giocatore){
    console.log("HAI VINTO!")
}
else{
    console.log("MI DISPIACE, HAI PERSO!")
}