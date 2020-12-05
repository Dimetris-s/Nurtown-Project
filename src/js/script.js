const navigationLinks = document.querySelectorAll('.menu__item')

navigationLinks.forEach(el => {
    el.addEventListener('click', evt => {
        if(el.classList.contains('active')) {
            evt.preventDefault()
        }
    })
})
//! API google maps
// AIzaSyDq8klL_fGkWXtW5Gu8QdAcpVBxUuI7EBk

const closeBtn = document.querySelectorAll('.modal__close')
const modal = document.querySelector('.modal')
const modalOk = document.querySelector('.modal-ok')
const modalForm = document.querySelector('.modal-form')
const backBtn = document.querySelector('.back-js')
const contactBtn = document.querySelector('.js-contact')
const submitBtn = document.querySelector('.form__button')
const myForm = document.querySelector('.form__body')


// myForm.onsubmit = (e) => {
//     e.preventDefault()
//     modal.classList.remove('hidden')
//     modalForm.classList.add('hidden')
//     modalOk.classList.remove('hidden')
// }

if(submitBtn) {
    submitBtn.onclick = () => {
        modal.classList.remove('hidden')
        modalForm.classList.add('hidden')
        modalOk.classList.remove('hidden')
    }
}


if(contactBtn) {
    contactBtn.onclick = () => {
        modal.classList.remove('hidden')
        modalOk.classList.add('hidden')
        modalForm.classList.remove('hidden')
    }
}
if(backBtn) {
    backBtn.onclick = () => {
        modal.classList.add('hidden')
    }
}

if(closeBtn) {
    closeBtn.forEach(e => {
        e.onclick = () => {
            modal.classList.add('hidden')
        }
    })
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.add('hidden')
    }
})