window.addEventListener('load', loadingBurger);

function loadingBurger() {
    let burger = document.querySelector('.burger-menu');
    burger.addEventListener('click', showBurger);

    let burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.addEventListener('click', hideBurger);

    let burgerWrapper = document.querySelector('.burger-wrapper');
    burgerWrapper.addEventListener('click', hideBurger);

    function showBurger() {
        document.body.classList.add('visible-burger');
        document.querySelector('.burger-wrapper').style.display = 'block';
    }

    function hideBurger(event) {
        if (document.body.classList.contains('visible-burger')) {
            if (event.target.classList.contains('burger-icon') || event.target.classList.contains('burger-wrapper') || event.target.classList.contains('burger-item')) {
                document.body.classList.remove('visible-burger');
                event.stopPropagation();
                setTimeout(() => {
                    document.querySelector('.burger-wrapper').style.display = 'none';
                }, 200);
            }
        }
    }
}

