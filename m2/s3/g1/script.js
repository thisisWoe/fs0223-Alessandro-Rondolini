
//ESERCIZIO 1

class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(persona2){
        if (this.age > persona2.age){
            return this.firstName + ' è più veccio di ' + persona2.firstName;
        } else {
            return persona2.firstName + ' è più vecchio di ' + this.firstName;
        }

    }
}

let mario = new User('Mario', 'Rossi', 30, 'Italy');
let luigi = new User('Luigi', 'Verdi', 35, 'Italy');
let jhon = new User('Jhon', 'White', 25, 'English');

console.log(mario.confronto(luigi)); // funziona

//ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById('pet-form');
const petList = document.getElementById('pet-list');

const pets = [];

petForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = petForm.elements['pet-name'].value;
    const ownerName = petForm.elements['owner-name'].value;
    const species = petForm.elements.species.value;
    const breed = petForm.elements.breed.value;

    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);

    const listItem = document.createElement('li');
    listItem.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - proprietario: ${pet.ownerName}`;

    petList.appendChild(listItem);
      let resultComparation;
    
    // confronto con altri animali
    pets.forEach(function(otherPet) {
      if (otherPet !== pet && pet.sameOwner(otherPet)) {
          return  resultComparation = [true, `${pet.petName} e ${otherPet.petName} condividono lo stesso proprietario.`]
      }
    });


    console.log(resultComparation);
    console.log(resultComparation[0]);
    console.log(resultComparation[1]);

    petForm.reset();
}); // funziona
