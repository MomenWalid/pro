let pag = document.querySelector('.slider .pagination')
let slider = document.querySelectorAll('.slider .row');
let spanPag = Array.from(document.querySelectorAll('.slider .pagination span'))
let i = 0;


pag.innerHTML = '';
for (let x = 0; x < slider.length; x++) {
    let span = document.createElement('span');
    pag.appendChild(span)
}

spanPag = Array.from(document.querySelectorAll('.slider .pagination span'))

spanPag[0].classList.add('active')

setInterval(() => {
    slider[i].classList.remove('active')
    spanPag[i].classList.remove('active')

    i++;

    spanPag.forEach(el => {

        el.addEventListener('click', e => {
            e.preventDefault()
            slider[i].classList.remove('active')
            spanPag[i].classList.remove('active')
            i = spanPag.indexOf(e.target);
            spanPag[i].classList.add('active')
            slider[i].classList.add('active')
        })
    })

    if (i >= slider.length) {
        i = 0;
        spanPag[i].classList.add('active')
        slider[i].classList.add('active')
    } else {
        spanPag[i].classList.add('active')
        slider[i].classList.add('active')
    }
}, 5000)

// Slider for testimonials

let pagTest = document.querySelector('.testimonials .pagination')
let sliderTest = document.querySelectorAll('.testimonials .row');
spanPagTest = Array.from(document.querySelectorAll('.testimonials .pagination span'))
let x = 0;




pagTest.innerHTML = ''
for (let x = 0; x < sliderTest.length; x++) {
    let span = document.createElement('span');
    pagTest.appendChild(span)
}

spanPagTest = Array.from(document.querySelectorAll('.testimonials .pagination span'))
spanPagTest[0].classList.add('active')

setInterval(() => {
    sliderTest[x].classList.remove('active')
    spanPagTest[x].classList.remove('active')
    x++;

    spanPagTest.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            sliderTest[x].classList.remove('active')
            spanPagTest[x].classList.remove('active')
            x = spanPagTest.indexOf(e.target);
            spanPagTest[x].classList.add('active')
            sliderTest[x].classList.add('active')
        })
    })

    if (x >= sliderTest.length) {
        x = 0;
        spanPagTest[x].classList.add('active')
        sliderTest[x].classList.add('active')
    } else {
        spanPagTest[x].classList.add('active')
        sliderTest[x].classList.add('active')
    }
}, 5000)



let scrollUp = document.querySelector(".up");

if (scrollUp) {
    window.onscroll = function () {
        this.scrollY >= 1000 ? scrollUp.classList.add("show") : scrollUp.classList.remove("show");
    };

    scrollUp.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}



