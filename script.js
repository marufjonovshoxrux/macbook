const gray = document.querySelector('#Gray')
const White = document.querySelector('#White')
const h2 = document.querySelector('h2')
const img = document.querySelector('img')




gray.onclick = () => {
    img.setAttribute('src', './img/macbook_gray.png')
    h2.innerText = 'Gray'
    gray.classList.add('active')
    
}

White.onclick = () => {
    img.setAttribute('src', './img/macbook_white.png')
    h2.innerText = 'White'
}

const btns = document.querySelectorAll('button[data-price]')
const span = document.querySelector('span')
let origin = 1999


btns.forEach(btn => {
    btn.onclick = () => {
        const addPrice = +btn.getAttribute('data-price')
        span.innerHTML = +origin + addPrice
    }
    
})






