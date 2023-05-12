const getProducts = function () {
    fetch(DATABASE_URL, {
        headers: {
        "Authorization": apiKey
        }
    })
    .then((res) => {
      console.log(".then ~ res", res)
      if (res.ok) {
          contentLength = res.headers.get('Content-Length');
          console.log(".then ~ contentLength", contentLength)
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
                <div class="card rounded-5 mb-5">
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
        loadingBarAnimation()

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




//al caricamento della pagina    
window.onload = () => {
    getProducts()
  }

const loadingBarAnimation = function () {
    fetch(DATABASE_URL, {
      headers: {
        "Authorization": apiKey
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Errore durante l\'esecuzione della richiesta');
        }
        return res;
      })
      .then(function (response) {
        const totalBytes = parseInt(response.headers.get('Content-Length'), 10);
        let bytesDownloaded = 0;
        const reader = response.body.getReader();
  
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                bytesDownloaded += value.length;
                const percentComplete = (bytesDownloaded / totalBytes) * 100;
                loadingBar.value = percentComplete;
                progressLabel.textContent = `${Math.round(percentComplete)}% - LOADED`;
                push();
              });
            }
            push();
          }
        });
      })
      .then(function (stream) {
        return new Response(stream).text();
      })
      .then(function (data) {
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        loadingBar.style.display = 'none';
      });
  };
  