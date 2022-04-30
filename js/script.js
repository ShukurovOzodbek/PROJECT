// modal_window
const blur = document.querySelector('.modal') 
const modal = document.querySelector('.modal__content')
const btn_cal = document.querySelector('.header__right-block .btn')
const btn_cal2 = document.querySelector('.offer__action .btn')
const modal__close = document.querySelector('.modal__close')
const modal__dialog = document.querySelector('.modal__dialog')
let abb = document.querySelector('.thank__modal')

modal__close.onclick = () => {
    modal.style.transform = 'translateY(-883px)'
    abb.style.top = '-50%'
    blur.style.display = 'none'
}
blur.onclick = () => {
    modal.style.transform = 'translateY(-883px)'
    blur.style.display = 'none'
    abb.style.top = '-50%'
}
btn_cal.onclick = () => {
    modal.style.transform = 'translateY(-183px)'
    blur.style.display = 'block'
    modal__dialog.classList.value = 'modal__dialog show'
}
btn_cal2.onclick = () => {
    modal.style.transform = 'translateY(-183px)'
    blur.style.display = 'block'
}

// slider
let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')

let slideIndex = 0

prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}  
next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
} 

function showSlide(n) {

    if(n >= offer__slide.length) {
        slideIndex = 0
    }
    if(n == -1) {
        slideIndex = offer__slide.length - 1
    }
    offer__slide.forEach(img => {
        img.style.display = 'none'
    });
    offer__slide[slideIndex].style.display = "block"
    
    current.innerHTML = '0' + (slideIndex+1) 
}


showSlide()

// TIMER
const day = document.querySelector('#days')
const hour = document.querySelector('#hours')
const min = document.querySelector('#minutes')
const sec = document.querySelector('#seconds')

const endDay = new Date('May 20, 2022, 00:00:00').getTime()

const func = setInterval(() => {
    const now  = new Date().getTime()  
    const prom = endDay - now 
    
    day.innerHTML = Math.floor(prom / (1000 * 60 * 60 * 24))
    hour.innerHTML = Math.floor((prom % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    min.innerHTML = Math.floor((prom % (1000 * 60 * 60)) / (1000 * 60))
    sec.innerHTML = Math.floor((prom % (1000 * 60)) / (1000))
});

// tabs
let img = document.querySelectorAll('.tabcontent img')
let btn = document.querySelectorAll('.tabheader__item')
let tabcontent__descr = document.querySelectorAll('.tabcontent__descr')

let inx = 0
img.forEach(element => {
    element.style.display = 'none'
});
img[inx].style.display = 'block'

tabcontent__descr.forEach(element => {
    element.style.display = 'none'
});
tabcontent__descr[inx].style.display = 'block'

btn.forEach(element => {
    element.onclick = () => {
        let tabId =  element.getAttribute('data-tab')
        btn.forEach(element => {
            element.classList.remove('tabheader__item_active')
        });
        element.classList.add('tabheader__item_active')
        changeContent(element.getAttribute('data-tab'))
    }
});
const changeContent = (par) => {
    switch (par) {
        case '#tab_1':
            img.forEach(element => {
                let a = element.setAttribute('src', 'img/tabs/vegy.jpg')
            });
            tabcontent__descr.forEach(element => {
                let a = element.getAttribute('id')
                element.innerHTML = ' Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'
            });
            break;
        case '#tab_2':
            img.forEach(element => {
                element.setAttribute('src', 'img/tabs/elite.jpg')
            });
            tabcontent__descr.forEach(element => {
                let a = element.getAttribute('id')
                element.innerHTML = 'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан! '
            });
            break;
        case '#tab_3':
            img.forEach(element => {
                element.setAttribute('src', 'img/tabs/post.jpg')
            });
            tabcontent__descr.forEach(element => {
                let a = element.getAttribute('id')
                element.innerHTML = 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!'
            });
            break;
        case '#tab_4':
            img.forEach(element => {
                element.setAttribute('src', 'img/tabs/vegy.jpg')
            });
            tabcontent__descr.forEach(element => {
                let a = element.getAttribute('id')
                element.innerHTML = ' Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.'
            });
            break;
    }
}

// Regex
let form = document.forms.call
let caller = document.forms.caller
let inputs2 = caller.querySelectorAll('.modal__input')
let inputs = form.querySelectorAll('.order__input')
let btn_call = form.querySelector('.btn')

let pattern = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.'-]+$/u,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im 
}

function validate(field,regex) {
    if(regex.test(field.value)) {
        field.style.border = "1px solid green"
    }else {
        field.style.border = "1px solid red"
    }
}
form.onsubmit = (event) => {
    submit(event, form)
    inputs.forEach(input => {
        input.value = ''
    });
}
caller.onsubmit = (event) => {
    submit(event, caller)
    inputs2.forEach(input => {
        input.value = ''
    });
}


function submit(e, forms) {
    e.preventDefault()

    let elem = {}
    
    let fm = new FormData(forms)

    fm.forEach((value, key) => {
        elem[key] = value
    });

    console.log(elem);

    setTimeout(() => {
        modal.style.transform = 'translateY(-883px)'
        modal__dialog.style.display = 'none'
        setTimeout(() => {
            abb.style.top = '30%'
            document.querySelector('.modal__title2').innerHTML = `Спасибо за оставленную заявку <b>${elem.name}</b>`
            setTimeout(() => {
                abb.style.top = '-30%'
                blur.style.display = 'none'
            }, 3000);
        }, 200);
    }, 500);
}

window.onscroll = () => {
    if(window.scrollY + 1 > document.documentElement.scrollHeight - document.documentElement.clientHeight){
        modal.style.transform = 'translateY(-183px)'
        blur.style.display = 'block'
        modal__dialog.classList.value = 'modal__dialog show'
    }
};

inputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
});

inputs2.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
});

