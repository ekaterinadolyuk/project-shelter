window.addEventListener('load', function() {
    let cross = document.querySelector('.fa-xmark');
    cross.addEventListener('click', hidePopUp);

    let wrapper = document.querySelector('.pet-wrapper');
    wrapper.addEventListener('click', hidePopUp);
});

function showPopUp(pet) {
    document.body.classList.add('visible-pop-up');
    document.querySelector('.pet-image').setAttribute('src', pet.img);
    document.querySelector('.pet-name').innerText = pet.name;
    document.querySelector('.pet-breed').innerText = pet.type + ' - ' + pet.breed;
    document.querySelector('.pet-text').innerText = pet.description;
    document.querySelector('.pet-age span').innerText = pet.age;
    document.querySelector('.inoculations span').innerText = pet.inoculations;
    document.querySelector('.diseases span').innerText = pet.diseases;
    document.querySelector('.parasites span').innerText = pet.parasites;
}

function hidePopUp(event) {
    if (document.body.classList.contains('visible-pop-up')) {
        if (event.target.classList.contains('fa-xmark') || event.target.classList.contains('pet-wrapper')) {
            document.body.classList.remove('visible-pop-up');
        }
    }
}



