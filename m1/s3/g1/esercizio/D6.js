/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1, l2) {
    return (l1 * l2);
}
console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    }
    return n1 + n2;
}

console.log(crazySum(5,8));
console.log(crazySum(10,10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (n3){
    if (n3 <= 19) {
        return (n3 - 19);
    }
    return Math.abs(n3 - 19) * 3;
}

console.log(crazyDiff(15));
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n4) {
    return Boolean((n4 >= 20 && n4 <= 100) || n4 === 400)
}
console.log(boundary(30));
console.log(boundary(19));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (str1) {
    if (str1.startsWith("EPICODE")) {
        return str1;
    } return ("EPICODE" + str1);
}
console.log(epify(" saluta tutti gli svilupppatori"));
console.log(epify("EPICODE saluta tutti gli sviluppatori"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (n5) {
    return Boolean(n5 % 3 === 0 || n5 % 7 === 0);
}
console.log(check3and7(21));
console.log(check3and7(24));
console.log(check3and7(16));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str2){
    return str2.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/*La funzione reverseString riceve una stringa come parametro, la converte in un array di caratteri utilizzando il metodo split(""), inverte l'ordine degli elementi dell'array utilizzando il metodo reverse(), e infine unisce gli elementi dell'array in una stringa utilizzando il metodo join(""). In questo modo, la funzione restituisce la stringa originale, ma con i caratteri in ordine inverso.

In dettaglio, la funzione reverseString esegue i seguenti passaggi:

Riceve la stringa str2 come parametro.
Converte la stringa in un array di caratteri utilizzando il metodo split(""). Ad esempio, se str2 fosse "EPICODE", allora l'array sarebbe ["E", "P", "I", "C", "O", "D", "E"].
Inverte l'ordine degli elementi dell'array utilizzando il metodo reverse(). Ad esempio, l'array diventerebbe ["E", "D", "O", "C", "I", "P", "E"].
Unisce gli elementi dell'array in una stringa utilizzando il metodo join(""). Ad esempio, la stringa risultante sarebbe "EDOCIPE".
Infine, la funzione restituisce la stringa risultante.

Quando si chiama la funzione reverseString("EPICODE") e si stampa il risultato utilizzando console.log(), verrà stampata la stringa "EDOCIPE", che è la stringa "EPICODE" scritta al contrario.*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str3){
    let words = str3.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    } return words.join(" ");
}

console.log(upperFirst("ciao mi chiamo alessandro"));

/*
CODICE
function upperFirst(str) {
  // Dividiamo la stringa in un array di parole utilizzando lo spazio come separatore
  let words = str.split(" ");

  // Iteriamo su ogni parola nell'array e rendiamo maiuscola la prima lettera
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  // Uniamo le parole nell'array per formare la stringa finale
  let result = words.join(" ");

  return result;
}
FINE CODICE

La funzione upperFirst esegue i seguenti passaggi:

Riceve la stringa str come parametro.
Dividiamo la stringa in un array di parole utilizzando lo spazio come separatore, utilizzando il metodo split(" "). Ad esempio, se str fosse "ciao a tutti", allora l'array sarebbe ["ciao", "a", "tutti"].
Iteriamo su ogni parola nell'array utilizzando un ciclo for.
Per ogni parola nell'array, rendiamo maiuscola la prima lettera utilizzando il metodo toUpperCase() sul primo carattere della parola, e concateniamo il resto della parola utilizzando il metodo substring(1).
Uniamo le parole nell'array per formare la stringa finale, utilizzando il metodo join(" "). Ad esempio, la stringa risultante sarebbe "Ciao A Tutti".
Infine, la funzione restituisce la stringa risultante.
Quando si chiama la funzione upperFirst("ciao a tutti"), la funzione restituirà la stringa "Ciao A Tutti".


*/
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str4) {
    return str4.substring(1, str4.length - 1);
}
console.log(cutString("Alessandro"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n6){
    let array1 = [];
    for (let k = 0; k < n6; k++) {
        array1.push(Math.floor(Math.random() * 11));
    } return array1;
}
console.log(giveMeRandom(5));

/*La funzione giveMeRandom esegue i seguenti passaggi:

Riceve il parametro n, che indica il numero di elementi dell'array da generare.
Crea un array vuoto arr.
Utilizza un ciclo for per generare n numeri casuali e inserirli nell'array arr. Il metodo Math.random() genera un numero casuale compreso tra 0 e 1, che moltiplichiamo per 11 per ottenere un numero compreso tra 0 e 10. Il metodo Math.floor() arrotonda il risultato per difetto, in modo da ottenere un numero intero compreso tra 0 e 10.
Restituisce l'array arr contenente i numeri casuali generati.
Quando si chiama la funzione giveMeRandom(5), la funzione restituirà un array contenente 5 numeri casuali compresi tra 0 e 10. Ad esempio, [2, 7, 0, 4, 9]. */