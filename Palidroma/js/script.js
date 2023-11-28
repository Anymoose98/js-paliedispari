// Creare la funzione
function ParolaPalidroma(parola){
    let parola_capovolta = parola.split("").reverse().join("")

    if (parola_capovolta == parola){
        return true
    }
    else{
        return false
    }
}


// chiedere all'utente di inserire una parola
let parola = prompt("Quale parola vuoi sapere se è palidroma?");
let risultato = ParolaPalidroma(parola);
    if(risultato == true){
        console.log("La parola è palidroma!")
    }
    else{
        console.log("La parola NON è palidroma!")
    }