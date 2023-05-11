let titleChartDiv = document.querySelector('#title');
let priceChartDiv = document.querySelector('#price');
let buttonDeleteChart = document.querySelector('#delete-container');

fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) => {
        console.log("res", res)
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error');
        }
    })
    .then((books) => {
        console.log("books", books);
        let mainRow = document.getElementById('main-row')
        books.forEach((book) => {
        let col = document.createElement('div');
        col.classList.add('col-12', 'col-lg-3');
        col.innerHTML = `
            <div style="height: 682px" class="card bg-dark border-2 border-light mb-2">
                <img src=${book.img} style="height: 450px" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column align-items-center justify-content-between">
                    <h5 class="card-title text-white">${book.title}</h5>
                    <p class="card-text text-white fw-bold">Price: ${book.price}€</p>
                    <div class="d-flex align-items-end justify-content-center w-100">
                        <button id="discard" type="button" class="btn btn-danger me-2">Discard</button>
                        <button id="buy" type="button" class="btn btn-success">Buy</button>
                    </div>
                /div>
            </div>`;
        mainRow.appendChild(col);
            //DISCARD
        let discardButton = col.querySelector('#discard');
        discardButton.addEventListener('click', () => {
            let cardBody = discardButton.parentNode;
            /* console.log("cardBody", cardBody) */
            let card = cardBody.parentNode;
            /* console.log("card", card) */
            let item = card.parentNode;
            item.parentNode.remove(col);
        });
            //BUY
        let chartButton = col.querySelector('#buy');
        chartButton.addEventListener('click', () => {
            let cardBody = discardButton.parentNode;
            let card = cardBody.parentNode;
            let item = card.parentNode;
            //aggiungo nel local storage
            localStorage.setItem(`${book.title}`, JSON.stringify(`${book.price}`));
            
            let title = `${book.title}`;
            let price = `${book.price}`;
            console.log("price", price)
            console.log("title", title)

            // Crea i nuovi elementi p per il titolo e il prezzo
            let titleP = document.createElement('p');
            let priceP = document.createElement('p');
            let deleteButtonContainer = document.createElement('div');
            deleteButtonContainer.classList.add('d-flex', 'align-items-center');

            titleP.textContent = title;
            titleChartDiv.appendChild(titleP);

            priceP.textContent = price;
            priceChartDiv.appendChild(priceP);

            deleteButtonContainer.innerHTML = `
                <button id="deleteItemChart" type="button" class="btn btn-danger deleteItem">Remove</button>
            `;
            buttonDeleteChart.appendChild(deleteButtonContainer);

        })
        })
    })
    
    .catch((err) => {
        console.log("err", err)
    })



// Recupero tutte le chiavi
let keys = Object.keys(localStorage);
console.log("keys", keys)

keys.forEach((key) => {
    let title = key;
    let titleP = document.createElement('p');
    titleP.textContent = title;
    titleChartDiv.appendChild(titleP);
    let deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.classList.add('d-flex', 'align-items-center');
    deleteButtonContainer.innerHTML = `
            <button id="deleteItemChart" type="button" class="btn btn-danger deleteItem">Remove</button>
        `;
    buttonDeleteChart.appendChild(deleteButtonContainer);
});

// Itero su ogni chiave e recupero il valore corrispondente
keys.forEach(key => {
    let price = JSON.parse(localStorage.getItem(key));
    console.log("price", price)
    let priceBook = price;
    let priceP = document.createElement('p');
    priceP.textContent = priceBook;
    priceChartDiv.appendChild(priceP);
});


