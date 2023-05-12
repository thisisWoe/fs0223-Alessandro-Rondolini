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
