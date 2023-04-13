/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

        let titleH1 = document.querySelector('h1');
        const changeTitle = function (str) {
                return titleH1.textContent = str
        }

        changeTitle('il nuovo titolo');
        
       /* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */
   
       const addClassToTitle = function () {
        return titleH1.classList.add('myHeading');
   
       }
       addClassToTitle()

       /* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

let allP = document.querySelectorAll('div p');
function changePcontent (newString) {
    return allP.forEach(i => i.textContent = newString)
}

changePcontent("Lorem Ipsum");

/* ESERCIZIO 4
    Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
    */

        let allMainLinks = document.querySelectorAll('div a');   
        const changeUrls = function (newLink) {
        return allMainLinks.forEach(i => i.href = newLink)
        }

       changeUrls('https://www.google.com');

       /* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

        const addToTheSecond = function (textInside) {
          let secondList = document.getElementById('secondList');  
          let newLi = document.createElement('li');  
          secondList.appendChild(newLi);
          newLi.textContent = textInside;
        }

        addToTheSecond('4th')

       /* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
       const addParagraph = function (textParagraph) {
        let firstDiv = document.querySelector('div');
        let newP = document.createElement('p');
        firstDiv.append(newP);
        newP.textContent = textParagraph;
       }
       
       addParagraph('Lorem Ipsum');

       /* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

       const hideFirstUl = function (opacità) {
        let firstUl = document.querySelector('ul');
        firstUl.style.opacity = opacità;
   
       }
       hideFirstUl(0);
       /* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */
   
       const paintItGreen = function (colore) {
        let allUl = document.querySelectorAll('ul');
        allUl.forEach(i => i.style.backgroundColor = colore);
       }
       
       paintItGreen("green");
       /* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

       const makeItClickable = function () {
        let textTitle = titleH1.textContent;
        titleH1.textContent = textTitle.slice(0, -1);
       };

       titleH1.addEventListener('click', function(){
        return makeItClickable();
       });


       /* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

        let footer = document.querySelector('footer');
        
        const revealFooterLink = function () {
        let aFooter = footer.querySelector('a');
        let url = aFooter.getAttribute('href');
        alert(url);
       }

       footer.addEventListener('click', function(){
        return revealFooterLink();
       });

       /* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const tableArea = document.getElementById('tableArea');
       let table = tableArea.appendChild(document.createElement('table'));
       let thead = table.appendChild(document.createElement('thead'));
       let tBody = table.appendChild(document.createElement('tbody')); 


       const generateTable = function () {
        for (let i = 0; i < 5; i++) {
            if (i === 1) {
            let tr = thead.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('th')).textContent = 'Immagine';
            tr.appendChild(document.createElement('th')).textContent = 'Nome prodotto';
            tr.appendChild(document.createElement('th')).textContent = 'Quantità';
            tr.appendChild(document.createElement('th')).textContent = 'Prezzo';
        }
            let tr = tBody.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('td')).textContent = 'Immagine';
            tr.appendChild(document.createElement('td')).textContent = 'Prodotto';
            tr.appendChild(document.createElement('td')).textContent = 'Quantità';
            tr.appendChild(document.createElement('td')).textContent = 'Prezzo';
        }
    }

    generateTable();

       /* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
        
        const addRow = function () {
   
   
        }
   
       /* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }