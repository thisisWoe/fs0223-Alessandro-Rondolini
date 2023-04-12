// PUSH
let arr =[];
arr.push("cosa a caso che voglio pushare alla fine dell'array")

// POP
//rimuove l'ultimo elemento e lo restituisce
arr.pop();

// SHIFT 
//rimuove il primo elemento e lo restituisce
arr.shift();

// UNSHIFT
//aggiunge un elemento all'inizio dell'array
arr.unshift("cosa a caso che voglio aggiungere all'inizio dell'array");

// SPLICE
//Aggiunge, rimuove o sostituisce gli elementi dell'array in base alla posizione dell'indice.
arr.splice(0, 1, "primo splice");
 
// Rimuove l'elemento con indice 0 e lo sostituisce con la stringa "primo splice" (l'1 indica quanti elementi deve rimuovere in quella posizione — se sono più di uno elimina quello nella posizione e poi verso destra — ). Posso anche aggiungere più elementi (separandoli con virgola).
arr.splice(0,1,"secondo splice","terzo splice");

// CONCAT 
// Unisce due o più array in un unico array.
// dichiaro un array (in questo caso: arrayConcatenato) e il suo valore sarà la concatenazione dei due array.

arr2 = ["elemento a caso da concatenare"];

let arrayConcatenato = arr.concat(arr2);

console.log(arrayConcatenato); // (3) ['secondo splice', 'terzo splice', 'elemento a caso da concatenare']

// SLICE
//viene utilizzata per estrarre una porzione di un array esistente e restituirlo come un nuovo array. Ha due parametri: START(posizione) e END(lunghezza) (se start è omesso inizia dalla posizione 0, se end è omesso prende tutta la lunghezza dell'array)

let arrEstratto = arrayConcatenato.slice(1,3);
//in questo caso per estrarre due valori gli do la lunghezza dell'array (quindi 3)

console.log(arrEstratto); // (2) ['terzo splice', 'elemento a caso da concatenare']

// SORT
// Definisce il criterio di ordinamento per gli elementi dell'array. Utilizza l'ordinamento lessicografico, quindi l'array viene ordinato come se tutti gli elementi fossero stringhe (Non consigliato per ordinare i numeri! Il 10 verrà prima del 2, occhio!). 

arrayConcatenato.sort();
console.log(arrayConcatenato); // (3) ['elemento a caso da concatenare', 'secondo splice', 'terzo splice']

let numeri = [10, 5, 2, 1, 9];
numeri.sort((a, b) => b - a); 
console.log(numeri);// [10, 9, 5, 2, 1] PER ORDINAMENTO INVERSO - SOLO NUMERI!

//REVERSE
//ordinamento inverso
arrayConcatenato.reverse();
console.log(arrayConcatenato); //(3) ['terzo splice', 'secondo splice', 'elemento a caso da concatenare']

// MAP
// è utilizzata quando si desidera applicare una determinata operazione ad ogni elemento di un array e creare un nuovo array con i risultati corrispondenti. Accetta come argomento una funzione di callback che viene eseguita per ogni elemento dell'array. La funzione di callback deve restituire il valore che deve essere incluso nel nuovo array che verrà creato.

let newArray = ["questo", "è", "un", "simpaticissimo", "array"];

let newArrayMap = newArray.map(i => i.toUpperCase()); // ritornami ogni elemento dell'array in maiuscolo nel nuovo array
/* // oppure posso scrivere così 
let newArrayMap = newArray.map(function(i) {
    return i.toUpperCase();
});
*/
console.log(newArrayMap); // (5) ['QUESTO', 'È', 'UN', 'SIMPATICISSIMO', 'ARRAY']

// FILTER
// filtra un array in base a determinati criteri e restituisce un nuovo array con gli elementi che soddisfano tali criteri.

let newArrayFilter = newArray.filter(i => i.startsWith("a")); // ritornami ogni elemento che inizia con "a" nel nuovo array

/*let newArrayFilter = newArray.filter(function(i) {
    return i.startsWith("a");
});*/

console.log(newArrayFilter); // ['array']

// REDUCE
// Per ridurre un array ad un singolo valore, applicando una funzione che combina tutti gli elementi dell'array. La funzione di riduzione prende due argomenti, l'accumulatore e l'elemento corrente dell'array.

let sommaDiNumeri = numeri.reduce((accumulator, current) => accumulator + current); //  la funzione di riduzione somma l'accumulatore e l'elemento corrente dell'array ad ogni iterazione, partendo da un valore iniziale di zero per l'accumulatore.

//N.B. accumulator e current possono essere sostituiti da qualsiasi cosa, es: (a, b).

console.log(sommaDiNumeri); // 27

//reduce e reduceRight sono identici (i parametri di chiamata della funzione sono invertiti: reduceRight((current, accumulator)), tranne per il fatto che reduce parte dall'inizio dell'array, mentre l'altro dalla fine. 

// INDEXOF
// per trovare l'indice della prima occorrenza di un elemento specifico all'interno di un array. La funzione restituisce -1 se l'elemento non viene trovato .

let trovareSimpaticissimo = newArray.indexOf("simpaticissimo");

console.log(trovareSimpaticissimo); // 3      quindi posizione 3

let trovareNumeriPari = numeri.indexOf(i => i % 2 === 0); // SBAGLIATO! Non accetta una funzione come argomento, quindi non posso trovarlo!!!

console.log(trovareNumeriPari); // -1

// FIND INDEX
// per cercare l'indice del primo elemento di un array che soddisfa una determinata condizione. 
// Questa condizione viene specificata attraverso una funzione di callback passata come parametro.

let trovarePrimoNumeroPari = numeri.findIndex(i => i % 2 === 0);
console.log(trovarePrimoNumeroPari); // 0   perchè il primo numero dell'array è 10.

// FIND 
// Per trovare il primo elemento di un array che soddisfa una determinata condizione e restituirlo.
/* accetta una funzione callback come argomento che definisce la condizione che l'elemento deve soddisfare per essere considerato una corrispondenza. La funzione callback accetta tre parametri:

element: l'elemento corrente dell'array
index: l'indice corrente dell'elemento nell'array
array: l'array su cui è stato chiamato il metodo find()                                                         */

let dimmiPrimoNumeroPari = numeri.find(i => i % 2 === 0);
console.log(dimmiPrimoNumeroPari); // 10

// SOME
// Per verificare se almeno un elemento dell'array soddisfa una determinata condizione.
// La funzione come argomento deve restituire un valore booleano, indicando se l'elemento corrente dell'array soddisfa o meno la condizione.

let disparoFraINumeri = numeri.some(i => i % 2 !== 0);

console.log(disparoFraINumeri); // true

// altro esempio

const libri = [
    { titolo: "Il signore degli anelli", autore: "J.R.R. Tolkien", genere: "Fantasy" },
    { titolo: "Il nome della rosa", autore: "Umberto Eco", genere: "Giallo" },
    { titolo: "Cronache del ghiaccio e del fuoco", autore: "George R.R. Martin", genere: "Fantasy" },
    { titolo: "La ragazza che giocava con il fuoco", autore: "Stieg Larsson", genere: "Giallo" }
  ];

// Vogliamo verificare se almeno un libro del genere "Fantasy" è stato scritto da un autore con un cognome che comincia con la lettera "T". Possiamo usare il metodo some() insieme ad una funzione di callback per verificare questa condizione:

const esisteLibroFantasyScrittoDaT = libri.some((libro) => {
    return libro.genere === "Fantasy" && libro.autore.split(" ")[1][0] === "T";
  });
  
  console.log(esisteLibroFantasyScrittoDaT); // Output: true

// EVERY 
// Per verificare che ogni elemento di un array soddisfi una determinata condizione, ovvero che una funzione restituisca true per tutti gli elementi dell'array.
//

let sonoTuttiPari = numeri.every(i => i % 2 === 0);

console.log(sonoTuttiPari); // false 