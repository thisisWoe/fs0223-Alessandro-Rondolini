const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTVlYzg4Zjc0MDAwMTQyODc0MzUiLCJpYXQiOjE2ODM4NzUzMDksImV4cCI6MTY4NTA4NDkwOX0.aVODIN7yfx0cYqO8N0s22qoEeQrKw5XQgUyBpPnevz8";
const DATABASE_URL = 'https://striveschool-api.herokuapp.com/api/product';
console.log("DATABASE_URL", DATABASE_URL)

let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get('productId');

let reset = document.getElementById('reset-button')
let oldReset = document.getElementById('old-reset')
let oldDelete = document.getElementById('old-delete')

let quantityHeroImages;
let scroller;

let loadingBar = document.getElementById('progressBar');
let contentLength;
let reader;

//carrello
let keys = [];
console.log("keys", keys)
let cartBodyText = document.querySelector('.offcanvas-body');
let value = [];
//inizio funzione vecchia
/* let addToCart = () => {
    for (let key in localStorage){
        if (localStorage.getItem(key) !== null){
            value.push(localStorage.getItem(key));
        }
    }
    value.forEach((string, index) => {
        let parsedObject = JSON.parse(string);
        console.log("value.forEach ~ parsedObject", parsedObject)
        value[index] = parsedObject;
        let cartItem = document.createElement('div');
        cartItem.innerHTML = 
        `
            <div class="d-flex justify-content-between mb-3 pb-1 border-bottom">
                <span class="cart-item-name text-white italic">${parsedObject.name}</span>
                <span class="cart-item-name italic text-success">${parsedObject.price}</span>
                <button class="btn btn-danger px-0 py-1">Remove</button>
            <div>
        `
        cartBodyText.appendChild(cartItem);
    })
    return value;
};
addToCart(); */
//fine funzione vecchia
//prova scomposizione addtocart
function addToCart(item) {
    localStorage.setItem(item.id, JSON.stringify(item));
}
/* addToCart(); */
function removeFromCart(itemId) {
    localStorage.removeItem(itemId);
    renderCartItems();
}
function getCartItems() {
    let items = [];
    for (let key in localStorage){
      if (localStorage.getItem(key) !== null){
        items.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    return items;
}
function renderCartItems() {
    let items = getCartItems();
    let cartBodyText = document.querySelector('.offcanvas-body');
    cartBodyText.innerHTML = "";
    items.forEach(item => {
      let cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <div class="d-flex justify-content-between mb-3 pb-1 border-bottom">
          <span class="cart-item-name text-white italic">${item.name}</span>
          <span class="cart-item-name italic text-success">${item.price}</span>
          <button class="btn btn-danger px-0 py-1" data-id="${item.id}">Remove</button>
        </div>
      `;
      cartBodyText.appendChild(cartItem);
    });

    let removeButtons = document.querySelectorAll('.btn-danger');
    removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let itemId = button.dataset.id;
      console.log("button.addEventListener ~ itemId", itemId)
      removeFromCart(itemId);
    });
  });
  }
//fine prova scomposizione addtocart