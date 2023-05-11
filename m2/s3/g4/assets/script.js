
fetch('https://api.pexels.com/v1/search?query=animals', {
    headers: {
        Authorization: apiKey}
    })
    .then((res) => {
        console.log("res", res)
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error');
        }
    })
    .then((animalFolder) => {
        console.log(".then ~ animalFolder", animalFolder)
        console.log(animalFolder.photos);

        firstLoadBtn.addEventListener('click', function(){
            for (let i = 0; i < allCards.length; i++) {

                
                
                if(contentContainer === null ){
                    contentContainer = document.querySelectorAll('.card img').parentNode;
                    console.log("firstLoadBtn.addEventListener ~ contentContainer", contentContainer)
                    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    contentContainer.replaceChild(document.querySelectorAll('.card img')[i], svgElement);
                    console.log("firstLoadBtn.addEventListener ~ contentContainer", contentContainer)
                    

                } else {
                    //immagine
                    let animalPhotos = animalFolder.photos;
                    let singleAnimalPhoto = animalPhotos[i].src.portrait;
                    
                    let newImg = document.createElement('img');
                    newImg.classList.add('w-100');
                    newImg.src = singleAnimalPhoto;
                    let contentContainer = svgTag[i].parentNode;
                    console.log("firstLoadBtn.addEventListener ~ contentContainer", contentContainer)
                    contentContainer.replaceChild(newImg, svgTag[i]);
                    //titolo
                    let allNewTitles = animalPhotos[i].alt;
                    allTitles[i].innerText = allNewTitles;
                    
                    //testo
                    let allNewParagraphs = `Photographer:  ${animalPhotos[i].photographer}`;
                    allParagraphs[i].innerText = allNewParagraphs;
                }

                
            }
        })

    })
    .catch((err) => {
        console.log("err", err)
});

fetch('https://api.pexels.com/v1/search?query=cars', {
    headers: {
        Authorization: apiKey}
    })
    .then((res) => {
        console.log("res", res)
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error');
        }
    })
    .then((carsFolder) => {
        console.log(".then ~ carsFolder", carsFolder)
        secondLoadBtn.addEventListener('click', function(){
            for (let i = 0; i < allCards.length; i++) {

                
                
                if(contentContainer === null){
                    let contentContainer = document.querySelectorAll('.card img').parentNode;
                    console.log("firstLoadBtn.addEventListener ~ contentContainer", contentContainer)
                    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    contentContainer.replaceChild(document.querySelectorAll('.card img'), svgElement);
                } else {
                    let contentContainer = svgTag[i].parentNode;
                    console.log("firstLoadBtn.addEventListener ~ contentContainer", contentContainer)
                    //immagine
                    let carPhotos = carsFolder.photos;
                    let singleCarPhoto = carPhotos[i].src.portrait;
                    
                    let newImg = document.createElement('img');
                    newImg.classList.add('w-100');
                    newImg.src = singleCarPhoto;
                    contentContainer.replaceChild(newImg, svgTag[i]);
                    //titolo
                    let allNewTitles = carPhotos[i].alt;
                    allTitles[i].innerText = allNewTitles;
                    
                    //testo
                    let allNewParagraphs = `Photographer:  ${carPhotos[i].photographer}`;
                    allParagraphs[i].innerText = allNewParagraphs;
                }
                
                
            }
        })


    })
    .catch((err) => {
        console.log("err", err)
});