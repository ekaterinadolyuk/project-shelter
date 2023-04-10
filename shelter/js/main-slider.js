window.addEventListener('load', newSection);

function newSection() {
    let arrayOfPets = [];
    for(let i=0; i<=2; i++) {
        /*to do: fill this array*/
        let randomIndex = Math.floor(Math.random() * window.petsData.length);

        // get random item
        let item = window.petsData[randomIndex];
        // add element to array
        arrayOfPets.push(item);
    }

    for(let i=0; i<3; i++) {
        let pet = arrayOfPets[i];
        let createATag = document.createElement('a');
        createATag.classList.add('friend-pet');
        createATag.classList.add('first-pet');
        createATag.setAttribute('href', '#');
        createATag.addEventListener('click', function (event){
            showPopUp(pet);
            event.preventDefault();
        });

        let createImgTag = document.createElement('img');
        createImgTag.setAttribute('src', pet.img);
        createImgTag.setAttribute('alt', pet.name);
        createImgTag.classList.add('friend-pet-image');

        let createDivTag = document.createElement('div');
        createDivTag.classList.add('friend-pet-name');
        createDivTag.innerText = pet.name;

        let createSpanTag = document.createElement('span');
        createSpanTag.classList.add('secondary-button');
        createSpanTag.innerText = 'Learn more';

        createATag.append(createImgTag);
        createATag.append(createDivTag);
        createATag.append(createSpanTag);

        let addSection = document.querySelector('.our-friends-pets');
        addSection.append(createATag);
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