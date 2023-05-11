//var apikey
const apiKey = 'eWYb76jJQBHn5guYiW0dn3qZKXZiDcWpMWydo0CjPDwSPZ779khbCQab';

//seleziono bottoni
let firstLoadBtn = document.querySelector('#load');
let secondLoadBtn = document.querySelector('#load-secondary');

let contentContainer;
// all cards
let allCards = document.querySelectorAll('.card');
console.log("allCards", allCards);

// seleziono gli <svg> dentro .card
let svgTag = document.querySelectorAll('.card svg');
console.log("svgTag", svgTag);

//seleziono i titoli delle card
let allTitles = document.querySelectorAll('.card h5');
console.log("allTitles", allTitles)

//seleziono il testo delle card
let allParagraphs = document.querySelectorAll('.card p');
console.log("allParagrphs", allParagraphs)