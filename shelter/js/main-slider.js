window.addEventListener('load', newSection);

let availablePets = [...window.petsData];

function newSection() {
    let arrayOfPets = [];
    for(let i=0; i<=2; i++) {
        let randomIndex = Math.floor(Math.random() * availablePets.length);

        // get random item
        let item = availablePets[randomIndex];
        // add element to array
        arrayOfPets.push(item);
        availablePets.splice(randomIndex, 1);
    }

    availablePets = [...window.petsData];

    for(let i=0; i<3; i++) {
        let pet = arrayOfPets[i];
        let addSection = document.querySelector('.our-friends-pets');
        addSection.append(sectionCreation(pet, i));
    }
}

window.addEventListener('load', clickableArrows);

function clickableArrows() {
    let chosenTags = document.querySelectorAll('.friend-pet-arrow');
    let addSection = document.querySelector('.our-friends-pets');
    chosenTags.forEach((element) => {element.addEventListener('click', function() {
        addSection.innerHTML = "";
        newSection()
    })})
}