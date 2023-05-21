let menuButton = document.querySelector('.header button');
let lesson = document.querySelector('.lesson-content')

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

