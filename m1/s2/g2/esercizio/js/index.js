

let titleExercise = document.getElementById('header');
let content = document.getElementById('main');

titleExercise.innerHTML = "<h1>Esercizio Giorno 2, Settimana 2</h1>";

titleExercise.setAttribute("style", "background-color: yellow; font-weight: bold; font-size: 3rem; text-align: center; padding: 3% 0 3% 0");

content.innerHTML = "<h2 id=\"exercise\">Rispondi alle seguenti domande:</h2>\n<ol id=\"questions\"><li id=\"question1\"></li><li id=\"question2\"></li><li id=\"question3\"></li><li id=\"question4\"></li><li id=\"question5\"></li><li id=\"question6\"></li><li id=\"question7\"></li></ol>"; 

let liElements = document.querySelectorAll("#questions li");

liElements.forEach(function(li) {
    li.classList.add("questions");
  });

let titleH2 = document.getElementById('exercise');

titleH2.setAttribute("style", "text-align: center; font-weight: bold; font-size: 2rem; padding: 3% 0 3% 0; color: green");

let questionsList = document.getElementsByClassName('questions');

questionsList.setAttribute("style", "text-align: start; font-size: 1.5rem; padding: 1.5% 1% 3% 0; color: green; text-decoration: italic");
/*
let question_1 = document.getElementsById('question1');
let question_2 = document.getElementsById('question2');
let question_3 = document.getElementsById('question3');
let question_4 = document.getElementsById('question4');
let question_5 = document.getElementsById('question5');
let question_6 = document.getElementsById('question6');
let question_7 = document.getElementsById('question7');

/*question_1.innerHTML = "Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino."

question_2.innerHTML = "Crea una variable chiamata \"name\" e assegna ad essa il tuo nome, sotto forma di stringa."

question_3.innerHTML = "Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20."

question_4.innerHTML = "Crea una variable di nome \"x\" e assegna ad essa il numero 12."

question_5.innerHTML = "Riassegna un nuovo valore alla variabile \"name\" già esistente: il tuo cognome. Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const."

question_6.innerHTML = "Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12)."

question_7.innerHTML = "Crea due variabili: \"name1\" e \"name2\". Assegna a name1 la stringa \"john\", e assegna a name2 la stringa \"John\" (con la J maiuscola!).\nVerifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa)."