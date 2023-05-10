//creare e appendere elementi

function createAndAppendMultiElements(elementName, quantity, parentId, position, className = '') {
    const parent = parentId ? document.getElementById(parentId) : document.body;
  
    for (let i = 0; i < quantity; i++) {
      const element = document.createElement(elementName);
  
      if (className) {
        element.className = className;
      }
  
      if (position === 'start') {
        parent.insertBefore(element, parent.firstChild);
      } else if (position === 'end') {
        parent.appendChild(element);
      }
    }
}
  
        /* 
        - elementName: il nome dell'elemento da creare.
        - quantity: la quantità di elementi da creare e appendere.
        - parentId: l'id dell'elemento a cui vogliamo appendere i nuovi elementi creati. Se non viene specificato, gli elementi 
          verranno appesi direttamente al body.
        - className: la classe che vogliamo assegnare ai nuovi elementi creati. Se non viene specificato, gli elementi non avranno 
          alcuna classe.
          N.B. Se il parametro id è null aggiunge direttamente come figlio nel body.
        Ecco un esempio:

        createAndAppendMultiElements('div', 3, null, 'end', 'myDivs'); */
////////////////////////////////////
function createAndAppendSingleElement(elementName, parentId, position = 'end', id = '', className = '') {
    const parent = parentId ? document.getElementById(parentId) : document.body;
    const element = document.createElement(elementName);

    if (id) {
      element.id = id;
    }
  
    if (className) {
      element.className = className;
    }

    if (position === 'start') {
      parent.prepend(element);
    } else {
      parent.appendChild(element);
    }
}

    /*La funzione crea un singolo elemento, lo assegna all'id specificato (se presente), e lo appende al parent specificato.*/

    /* Esempio:

    // Chiamata alla funzione per aggiungere un elemento <img> alla fine di un div con id "container" e id "logo"
    createAndAppendSingleElement('img', 'container', 'end', 'logo'); */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funzione che punta un elemento genitore tramite id e seleziona un figlio specifico per inserirgli un id

function addIdToChild(parentId, childIndex, childId) {
    const parent = document.getElementById(parentId);
    const children = parent.children;
    
    if (childIndex >= children.length) {
      console.log('numero inserito troppo grande rispetto al numero di figli');
      return;
    }
  
    const child = children[childIndex];
    child.id = childId;
  }
  
/*La funzione richiede tre parametri:

        - parentId: l'id dell'elemento genitore che contiene il figlio che si vuole selezionare.
        - childIndex: l'indice del figlio che si vuole selezionare (inizia da 1 per il primo figlio).
        - newId: il nuovo id che si vuole assegnare al figlio selezionato.
        La funzione riceve tre parametri: parentId, che è l'id del genitore; childIndex, che è l'indice del figlio che vogliamo selezionare; childId, che è l'id che vogliamo assegnare al figlio selezionato.

        La funzione controlla se l'indice passato come parametro è inferiore al numero di figli presenti nel genitore. In caso contrario, stampa un messaggio di errore nella console e termina l'esecuzione della funzione.
        
        Esempio:
        addIdToChild("parent", 2, "child2");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/