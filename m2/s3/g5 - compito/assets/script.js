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
                        <p class="card-text italic truncate">${object.description}</p>
                        <p class="card-text">${object.brand}</p>
                        <p class="card-text">${object.price} ETH</p>
                        <a id="moreInfoButton" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moreInfos${object._id}">More Info</a>
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
        //prova modal
        let modalsContainer = document.getElementById('modalContainer');
        let modalProductInfo = 
        `
        <div class="modal fade" id="moreInfos${object._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content rounded-5 bg-black">
                  <div class="modal-header d-flex justify-content-center">
                      <h1 class="modal-title text-white" id="exampleModalLabel">${object.name}</h1>
                  </div>
                  <div class="modal-body">
                    <img class="w-100" src="${object.imageUrl}" alt="nft-img">
                    <p class="italic text-white fs-4">${object.description}</p>
                    <p class="text-white fs-4">${object.brand}</p>
                    <p class="text-white fs-4">${object.price} ETH</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      <a id="exerciseRequest" href="./moreInfos.html?productId=${object._id}" class="btn btn-success" data-product-id="${object._id}">Exercise Request</a>
                  </div>
              </div>
          </div>
        </div>
        `
        modalsContainer.innerHTML += modalProductInfo
        //fine prova modal
        
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
          throw new Error('Error during request execution');
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