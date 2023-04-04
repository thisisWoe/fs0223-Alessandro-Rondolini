/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let rispostaDomanda = "String: una stringa è un insieme di caratteri, come lettere, numeri o simboli, racchiusi tra virgolette o apici. Ad esempio, \"ciao\" o \'12345\'.\nNumber: un numero è un valore numerico, come 42 o 3.14.\nBoolean: un booleano è un valore che può essere vero o falso. Ad esempio, vero o falso, 1 o 0, sì o no.\nArray: un array è un insieme di valori, come numeri, stringhe o booleani, racchiusi tra parentesi quadre e separati da virgole. Ad esempio, [1, 2, 3] o [\"ciao\", \"mondo\"].\nObject: un oggetto è un insieme di proprietà, come chiavi e valori, racchiusi tra parentesi graffe. Ad esempio, {nome: \"Mario\", età: 30}.\nUndefined: undefined è un valore speciale che indica l'assenza di un valore. Ad esempio, se dichiariamo una variabile senza assegnarle un valore, la variabile sarà undefined.\nNull: null è un valore che indica l'assenza di un valore. È simile a undefined, ma viene assegnato intenzionalmente a una variabile per indicare che non ha un valore."



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Alessandro"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 12;
let secondNumber = 20;
let somma = firstNumber + secondNumber;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Rondolini"
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log(name1 != name2);


if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("le due stringhe sono uguali")
} else {
  console.log("le due stringhe sono diverse")
}