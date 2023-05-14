if (productId) {

    document.getElementsByTagName('h2')[0].innerText =
      'Edit NFT'
    oldReset.classList.add('d-none')
    oldDelete.classList.remove('d-none')
    document.getElementById('save-button').innerText = 'EDIT NFT'
    let deleteButton = document.getElementById('delete-button')
    deleteButton.addEventListener('click', () => {
    fetch(DATABASE_URL + '/' + productId, {
            method: 'DELETE',
            headers: {
              "Authorization": apiKey
            }
    })
        .then((res) => {
          if (res.ok) {
            //location.assign('/g5%20-%20compito/index.html')
            location.assign('./index.html');
          } else {
            const alertDiv = document.createElement('div');
            alertDiv.classList.add('alert', 'alert-danger');
            alertDiv.textContent = 'Problem in NFT deletion';
            document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container'));
            throw new Error("Problem in NFT deletion")
          }
        })
        .catch((err) => {
          console.log(err)
          const alertDiv = document.createElement('div');
          alertDiv.classList.add('alert', 'alert-danger');
          alertDiv.textContent = err.message;
          document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container'));
        })
    })

      fetch(DATABASE_URL + '/' + productId, {
        headers: {
        "Authorization": apiKey
        }})
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          const alertDiv = document.createElement('div');
          alertDiv.classList.add('alert', 'alert-danger');
          alertDiv.textContent = 'Error in retrieving NFT';
          document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container'));
          throw new Error("Error in retrieving NFT")
        }
      })
      .then((product) => {
        console.log(
          'single NFT correctly retrieved',
          product
        )
        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('brand').value = product.brand
        document.getElementById('price').value = product.price
        document.getElementById('imageUrl').value = product.imageUrl
      })
      .catch((error) => {
        console.log(error)
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = error.message;
        document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container'));
      })
  } else {

  }


const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let nameInput = document.getElementById('name')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')
    let imgUrlInput = document.getElementById('imageUrl')

    let newProduct = {
      name: nameInput.value,
      description: descriptionInput.value,
      brand: brandInput.value,
      price: priceInput.value,
      imageUrl: imgUrlInput.value,
    }

    //validazione campi
    for (prop in newProduct) {
      if (!newProduct[prop]) {
        let inputElement = document.getElementById(prop);
        let errorMessageElement = inputElement.nextElementSibling;
        errorMessageElement.classList.remove('d-none');
        console.log("errorMessageElement", errorMessageElement)
        return;
      } else {
        let inputElement = document.getElementById(prop);
        let errorMessageElement = inputElement.nextElementSibling;
        errorMessageElement.classList.add('d-none');
      }
    }
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(newProduct.imageUrl)){
      let validationUrl = document.getElementById('imageUrlError');
      validationUrl.classList.remove('d-none');
      e.preventDefault();
      return;
    } else {
      let validationUrl = document.getElementById('productImageUrlError');
      validationUrl.classList.add('d-none');
      console.log("validationUrl", validationUrl)
    }


    if(newProduct.price <= 0){
      let validationPrice = document.getElementById('moreZeroPriceError');
      validationPrice.classList.remove('d-none');
      e.preventDefault();
      return;
    } else {
      let validationPrice = document.getElementById('moreZeroPriceError');
      validationPrice.classList.add('d-none');
    }

    fetch(productId ? DATABASE_URL + '/' + productId : DATABASE_URL, {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Authorization": apiKey,
            'Content-Type': 'application/json',
        },
    })
      .then((res) => {
        if (res.ok) {
          //location.assign('/g5%20-%20compito/index.html')
          location.assign('./index.html');
        } else {
          /* const alertDiv = document.createElement('div');
          alertDiv.classList.add('alert', 'alert-danger');
          alertDiv.textContent = 'Saving Error';
          document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container')); */
          throw new Error('Saving Error')
        }
      })
      .catch((err) => {
        console.log(err)
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = err.message;
        document.querySelector('main').insertBefore(alertDiv, document.getElementById('boff-container'));
      })
  })


reset.addEventListener('click', (event) => {
    event.preventDefault();
    productForm.reset();
})

