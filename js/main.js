let menuButton = document.querySelector('.header button');
let lesson = document.querySelector('.lesson-content')
let words = document.querySelector('.words')
let table = document.querySelector('.table')
let profileInfo = document.querySelector('.header .info')


if (profileInfo) {
    profileInfo.onclick = function () {
        document.querySelector('.header .info ul').classList.toggle('open')
    }
}


// Toggle nav 
if (menuButton) {
    menuButton.onclick = function (e) {
        e.preventDefault()

        if (e.target == menuButton || e.target == document.querySelector('.header button i')) {
            menuButton.classList.toggle('open')
        }
    }
}

// Activity button
if (lesson) {
    lesson.onclick = function (e) {

        if (e.target.classList.contains("activities")) {
            document.querySelector('.lesson-content .activity').classList.toggle('open')
        }
        else {
            document.querySelector('.lesson-content .activity').classList.remove('open')
        }
    }
}

if (words) {
    let card = Array.from(document.querySelectorAll('.content .card'))

    card.forEach(el => {

        el.addEventListener('click', e => {

            card.forEach(el => { el.classList.remove('flipped') })

            e.preventDefault();

            el.classList.toggle('flipped')

            document.getElementById(el.dataset.word).play()
        })
    })
}

// Table Sidebar
if (table) {
    document.querySelector('.table .sbtn').onclick = function () {
        document.querySelector('.table .sidebar').style.left = '0'
    }

    document.querySelector('.table .sidebar .xicon').onclick = function () {
        document.querySelector('.table .sidebar').style.left = '-300px'
    }

}




let up = document.querySelector(".up");

if (up) {
    window.onscroll = function () {
        this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
    };

    up.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}
