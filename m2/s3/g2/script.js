let form = document.querySelector('form');
let input = document.querySelector('#nameInput');

let save = document.querySelector('#save-btn');
let remove = document.querySelector('#remove-btn');

// form + bottoni
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = input.value;
    //save
    save.addEventListener('click', function(){
        localStorage.setItem('name', name);
    });
    //remove
    remove.addEventListener('click', function(){
        localStorage.removeItem('name', name);
    });


    console.log(name);
    form.reset();
});

let body = document.querySelector('body');
let h1 = document.createElement('h1');
body.appendChild(h1);

let counter = 0;
window.onload = function(){
    if (sessionStorage.getItem('counter')) {
        counter = sessionStorage.getItem('counter');
    }

    function incrementCounter() {
      counter++;
      sessionStorage.setItem('counter', counter);
      h1.textContent = `time spent without closing the page: ${Math.floor(counter / 60)} minutes and ${counter % 60} seconds`;
      h1.classList.add('text-white');
    }

    let intervalId = setInterval(incrementCounter, 1000);
    return counter;
};

/* clearInterval(intervalId); */
console.log(counter);







