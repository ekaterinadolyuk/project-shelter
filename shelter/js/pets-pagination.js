let paginationArray = [];

for(let i=0; i<=5; i++) {
    paginationArray = paginationArray.concat(shuffle());
}

function shuffle() {
    let availablePets = [...window.petsData];
    let shuffledPets = [];
    for(let i=0; i<=7; i++) {
        let randomIndex = Math.floor(Math.random() * availablePets.length);

        // get random item
        let item = availablePets[randomIndex];
        // add element to array
        shuffledPets.push(item);
        availablePets.splice(randomIndex, 1);
    }
    return shuffledPets;
}


window.addEventListener('load', showPets);

function showPets() {
    for(let i=0; i<8; i++) {
        let pet = paginationArray[i];
        let addSection = document.querySelector('.our-friends-pets');
        addSection.append(sectionCreation(pet, i));
    }
}