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
            location.assign('/g5%20-%20compito/index.html')
          } else {
            throw new Error("Problem in NFT deletion")
          }
        })
        .catch((err) => {
          console.log(err)
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
        document.getElementById('imageURL').value = product.imageUrl
      })
      .catch((error) => {
        console.log(error)
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
      }
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
          location.assign('/g5%20-%20compito/index.html')
        } else {
          throw new Error('Saving Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })


reset.addEventListener('click', (event) => {
    event.preventDefault();
    productForm.reset();
})

