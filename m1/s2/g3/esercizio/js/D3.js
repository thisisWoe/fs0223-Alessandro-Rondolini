/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
function biggerTwoNumbers(num1, num2) {

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}  
}
let result = biggerTwoNumbers(10, 20);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  function isNotEqual(num) {
    if (num != 5) {
      console.log("not equal");
    } else {
      console.log("equal");
    } 
  }
  let result = isNotEqual(7) 
  }
                                              /*{
                                                function isNotEqual(num) {
                                                  if (num != 5) {
                                                    console.log("not equal");
                                                  } else {
                                                    console.log("equal");
                                                  } 
                                                }
                                                let result = isNotEqual(5) 
                                                }*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
function isDivisibleBy5(num) {
if (num % 5 === 0) {
  console.log("divisible");
} else {
  console.log("not divisible");
}
}
let result = isDivisibleBy5(10)
}


{
  function isDivisibleBy5_2(num2) {
  if (num2 % 5 === 0) {
    console.log("divisible");
  } else {
    console.log("not divisible");
  }
  }
  let result = isDivisibleBy5_2(11);
  }
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
function isEight(num1, num2) {
if (num1 == 8 || num2 == 8) {
  console.log('num1 or num2 = 8');
} else {
  if (num1 + num2 == 8 || num1 - num2 == 8 || num2 - num1 == 8) {
  console.log('num1 + num2 or num1 - num2 or num2 - num1 = 8');
    }
  }
}
let result = isEight(56, 8)
}

{
  function isEight(num1, num2) {
  if (num1 == 8 || num2 == 8) {
    console.log('num1 or num2 = 8');
  } else {
    if (num1 + num2 == 8 || num1 - num2 == 8 || num2 - num1 == 8) {
    console.log(' one of: (num1 + num2 or num1 - num2 or num2 - num1) is 8');
      }
    }
  }
  let result = isEight(56, 48)
  }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
let totalShoppingCart = 51;
let totalShippingCost = 10;


if (totalShoppingCart > 50) {
  console.log(`total shopping cart = ${totalShoppingCart}€. Free Shipping!\n Thank you.`);
} else {
  console.log(`total shopping cart = ${totalShoppingCart + totalShippingCost}€.\n Thank you`);
}
}
{
  let totalShoppingCart = 49;
  let totalShippingCost = 10;
  
  
  if (totalShoppingCart > 50) {
    console.log(`total shopping cart = ${totalShoppingCart}€. Free Shipping!\n Thank you.`);
  } else {
    console.log(`total shopping cart = ${totalShoppingCart + totalShippingCost}€.\n Thank you`);
  }
  }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let totalShoppingCart = 51;
let totalShippingCost = 10;
let blackFriday = 0.8;

if (totalShoppingCart > 50) {
  console.log(`total shopping cart = ${totalShoppingCart * blackFriday}€. Free Shipping!\n Thank you.`);
} else {
  console.log(`total shopping cart = ${(totalShoppingCart + totalShippingCost) * blackFriday}€.\n Thank you`);
}
}
{
let totalShoppingCart = 49;
let totalShippingCost = 10;
let blackFriday = 0.8;
  
  
if (totalShoppingCart > 50) {
  console.log(`total shopping cart = ${totalShoppingCart * blackFriday}€. Free Shipping!\n Thank you.`);
} else {
  console.log(`total shopping cart = ${(totalShoppingCart + totalShippingCost) * blackFriday}€.\n Thank you`);
}
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
let num1 = 20;
let num2 = 10;
let num3 = 30;
let temp;

if (num1 < num2) {
  temp = num1;
  num1 = num2;
  num2 = temp;
}
if (num2 < num3) {
  temp = num2;
  num2 = num3;
  num3 = temp;
}
if (num1 < num2) {
  temp = num1;
  num1 = num2;
  num2 = temp;
}
console.log(num1, num2, num3);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let number = 8;
  let word = "stringa";
  console.log(typeof number);
  console.log(typeof word);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
function isOddEven(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}  
let result = isOddEven(20);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
}
{
  let val = 4
    if (val < 5) {
        console.log("Meno di 5");
      } else if (val < 10) {
        console.log("Meno di 10");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
}
{
  let val = 11
    if (val < 5) {
        console.log("Meno di 5");
      } else if (val < 10) {
        console.log("Meno di 10");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let arr = [];
  arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(arr);
} 

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = 100;
console.log(arr);