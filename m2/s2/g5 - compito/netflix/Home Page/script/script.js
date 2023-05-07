// CAROUSELS ANIMATIONS
let allCarousels = document.querySelectorAll('.carousel');
console.log(allCarousels);

for (let i = 0; i < allCarousels.length; i++) {
    let singleCarousel = allCarousels[i]
    if (singleCarousel) {
      let randomAnimation = Math.floor(Math.random() * 5000) + 5000;
      setInterval(function() {
        singleCarousel.querySelector('.carousel-control-next').click();
      }, randomAnimation);
    }
}


//MODAL OPEN
/* const myModal = document.getElementById('myModal') */
const myButton = document.getElementById('myInput');

myButton.addEventListener('click', () => {
  const modal = new bootstrap.Modal(myModal);
  modal.toggle();
});
