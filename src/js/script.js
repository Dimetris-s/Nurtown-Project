const navigationLinks = document.querySelectorAll('.menu__item')

navigationLinks.forEach(el => {
    el.addEventListener('click', evt => {
        if(el.classList.contains('active')) {
            evt.preventDefault()
        }
    })
})