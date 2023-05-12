const getProducts = function () {
    fetch(DATABASE_URL, {
        headers: {
        "Authorization": apiKey
        }
    })
    .then((res) => {
      console.log(".then ~ res", res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Request execution error')
      }
    })
    //inizio animazione barra caricamento
    
    //fine animazione barra caricamento
    .then((data) => {
    console.log(".then ~ data", data)
    data.forEach((object) => {
        let colTemplate = 
        `
            <div class="col-12 col-lg-4 mb-2">
                <div class="card rounded-5">
                    <img class="rounded-top-5" src="${object.imageUrl}" alt="nft-img">
                    <div class="card-body">
                        <h5 class="card-title">${object.name}</h5>
                        <p class="card-text italic">${object.description}</p>
                        <p class="card-text">${object.brand}</p>
                        <p class="card-text">${object.price} ETH</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                        <a href="./backoffice.html?productId=${object._id}" class="btn btn-primary">Edit</a>
                    </div>
                </div>
            </div>
        `
        let rowReference = document.getElementById('object-container')
        rowReference.innerHTML += colTemplate

        let heroTemplate = `
                <img class="" src="${object.imageUrl}" alt="nft-img">
            `
        let heroSection = document.getElementById('hero-section')
        heroSection.innerHTML += heroTemplate
        
        
    })
        //animazione hero
        quantityHeroImages = document.querySelectorAll('#hero-section img');
        scroller = document.querySelector('#hero-section');

        let speed = 20;
        let itemWidth = 600;
        console.log(".then ~ itemWidth", itemWidth)

        let totalWidth = itemWidth * (quantityHeroImages.length - 2.5);
        console.log(".then ~ totalWidth", totalWidth)
        
        let pos = 0;
        setInterval(function() {
        pos += 1;
        if (pos > (totalWidth - 1600)) {
            pos = 0;
            scroller.style.transform = 'translateX(' + (-pos) + 'px)';
        }
        scroller.style.transform = 'translateX(' + (-pos) + 'px)';
        }, speed);
    })
    .catch((error) => {
      console.log(error)
    })
    }

window.onload = () => {
    getProducts()
    loadingBarAnimation()
  }


const loadingBarAnimation = function () {
    /* fetch(DATABASE_URL, {
        headers: {
        "Authorization": apiKey
        }
    }) */
    fetch(DATABASE_URL, {
        headers: {
        "Authorization": apiKey
        }})
    .then((res) => {
      console.log(".then ~ res", res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Request execution error')
      }
    })
    .then(function(response) {
    let resx = response.headers;
    console.log(".then ~ resx", resx)
    let contentLength = response.headers.get('Content-Length');
    let totalBytes = parseInt(contentLength, 10);
    let bytesDownloaded = 0;
    let reader = response.body.getReader();

    return new ReadableStream({
        start(controller) {
        function push() {
            reader.read().then(({done, value}) => {
            if (done) {
                controller.close();
                return;
            }
            bytesDownloaded += value.length;
            let percentComplete = (bytesDownloaded / totalBytes) * 100;
            loadingBar.value = percentComplete;
            push();
            });
        }
        push();
        }
    });
    })
    .then(function(stream) {
    return new Response(stream).text();
    })
    .then(function(data) {
        // qui puoi elaborare i dati ricevuti dall'API
        })
        .catch(function(error) {
        // qui puoi gestire gli errori della richiesta
        })
        .finally(function() {
        // nasconde l'indicatore di caricamento quando il caricamento è terminato
        loadingBar.style.display = 'none';
        });
}
  /* const loadingBarAnimation = function () {}
    let loadingBar = document.getElementById('loadingBar');

    fetch('https://api.example.com/data')
        .then(function(response) {
        let contentLength = response.headers.get('Content-Length');
        let totalBytes = parseInt(contentLength, 10);
        let bytesDownloaded = 0;
        let reader = response.body.getReader();

        return new ReadableStream({
            start(controller) {
            function push() {
                reader.read().then(({done, value}) => {
                if (done) {
                    controller.close();
                    return;
                }
                bytesDownloaded += value.length;
                let percentComplete = (bytesDownloaded / totalBytes) * 100;
                loadingBar.value = percentComplete;
                push();
                });
            }
            push();
            }
        });
        })
        .then(function(stream) {
        return new Response(stream).text();
        })
        .then(function(data) {
        // qui puoi elaborare i dati ricevuti dall'API
        })
        .catch(function(error) {
        // qui puoi gestire gli errori della richiesta
        })
        .finally(function() {
        // nasconde l'indicatore di caricamento quando il caricamento è terminato
        loadingBar.style.display = 'none';
        });
  

 */