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
const myButton = document.getElementById('myInput');

myButton.addEventListener('click', () => {
  const modal = new bootstrap.Modal(myModal);
  modal.toggle();
});

//navbar
window.addEventListener("scroll", (e) => {
  let navbar = document.querySelector(".navbar");
  console.log(navbar);
  e.preventDefault();
  if (window.scrollY >= 56.50) {
    navbar.classList.add("bg-nav-animation");
  } else {
    navbar.classList.remove("bg-nav-animation");
    navbar.classList.add(".bg-nav-transparent");
  }
});