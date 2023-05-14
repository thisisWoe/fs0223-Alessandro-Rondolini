//faccio una get
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
            alertDiv.textContent = 'Problem find product informations';
            document.querySelector('main').appendChild(alertDiv);
          throw new Error("Problem find product informations")
        }
    })
    .then((product) => {
      console.log(
        'single NFT correctly retrieved', product)
        
        let currentProductImage = document.getElementById('currentProductImage');
        currentProductImage.setAttribute('src', product.imageUrl);
        let currentProductName = document.getElementById('currentProductName');
        currentProductName.textContent = product.name;
        let currentProductBrand = document.getElementById('currentProductBrand');
        currentProductBrand.textContent = `COLLECTION NAME: ${product.brand}`;
        let currentProductDescr = document.getElementById('currentProductDescr');
        currentProductDescr.textContent = product.description;
        let currentProductId = document.getElementById('currentProductId');
        currentProductId.textContent = `Token Address: ${product._id}`;
        let currentProductUsrId = document.getElementById('currentProductUsrId');
        currentProductUsrId.textContent = `Creator Address: ${product.userId}`;
        let currentProductCreated = document.getElementById('currentProductCreated');
        currentProductCreated.textContent = `Timestamp creation: ${product.createdAt}`;
        let currentProductUpdated = document.getElementById('currentProductUpdated');
        currentProductUpdated.textContent = `Last Edit: ${product.updatedAt}`;
        let currentProductPrice = document.getElementById('currentProductPrice');
        currentProductPrice.textContent = `${product.price} ETH`;

    })
    .catch((err) => {
      console.log(err)
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert', 'alert-danger');
      alertDiv.textContent = err.message;
      document.querySelector('main').appendChild(alertDiv);
    })