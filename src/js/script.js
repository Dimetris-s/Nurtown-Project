const navigationLinks = document.querySelectorAll('.menu__item')

navigationLinks.forEach(el => {
  el.addEventListener('click', evt => {
    if (el.classList.contains('active')) {
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



if (contactBtn) {
  contactBtn.onclick = () => {
    modal.classList.remove('hidden')
    modalOk.classList.add('hidden')
    modalForm.classList.remove('hidden')
  }
}
if (backBtn) {
  backBtn.onclick = () => {
    modal.classList.add('hidden')
  }
}

if (closeBtn) {
  closeBtn.forEach(e => {
    e.onclick = () => {
      modal.classList.add('hidden')
    }
  })
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.add('hidden')
  }
})

//! Валидация формы

const tel = document.getElementById("formTel");
if (tel) {

  const im = new Inputmask("+38 (999): 999 99 99");
  im.mask(tel);
}
if (myForm) {

  new JustValidate('.form__body', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      checkbox: {
        required: true
      },
      text: {
        required: true
      }

    },
    messages: {
      name: {
        required: 'Укажите Ваше имя!',
        minLength: 'Минимальное кол-во символов: 2',
        maxLength: 'Максимальное кол-во символов: 15'
      },
      phone: {
        required: 'Необходимо заполнить это поле!'
      },
      email: {
        required: 'Необходимо заполнить это поле!',
        email: 'Неправильно указан формат почты!'
      },
      checkbox: {
        required: 'Установите для продолжения!'
      },
      text: {
        required: 'Введите сообщение!'
      }
    },

    submitHandler: function (form) {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'mail.php', true)

      let formData = new FormData(form)

      xhr.send(formData)
      modal.classList.remove('hidden')
      if(modalForm) {
        modalForm.classList.add('hidden')
      }
      modalOk.classList.remove('hidden')
      form.reset()
    }
  });


}