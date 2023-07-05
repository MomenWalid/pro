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


let words2 = document.querySelector('.words2');

if (words2) {
    let fullscreenButton = document.getElementById('resize');
    let volumeButton = document.getElementById('volume')
    let playButton = document.getElementById('play')
    let reloadButton = document.getElementById('reload')
    let audio = document.getElementById('audio')
    let progressBar = document.getElementById('prog')

    let pageNum = document.querySelector('.page-num .num')
    let slider = document.querySelectorAll('.slide-show .slide');
    let nextBtn = document.querySelector('.slider-btn .next')
    let prevBtn = document.querySelector('.slider-btn .prev')
    let currentSlide = 1;



    fullscreenButton.addEventListener('click', function () {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();

            document.querySelector('#resize i').classList.remove('fa-up-right-and-down-left-from-center')
            document.querySelector('#resize i').classList.add('fa-down-left-and-up-right-to-center')
        }

        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen()

                document.querySelector('#resize i').classList.add('fa-up-right-and-down-left-from-center')
                document.querySelector('#resize i').classList.remove('fa-down-left-and-up-right-to-center')
            }
        }

    });

    volumeButton.addEventListener('click', function () {
        document.querySelector('#volume i').classList.toggle('fa-volume-high')
        document.querySelector('#volume i').classList.toggle('fa-volume-xmark')

        if (document.querySelector('#volume i').classList.contains('fa-volume-high')) {
            audio.volume = 1
        }

        if (document.querySelector('#volume i').classList.contains('fa-volume-xmark')) {
            audio.volume = 0
        }
    })

    playButton.addEventListener('click', function () {
        document.querySelector('#play i').classList.toggle('fa-play')
        document.querySelector('#play i').classList.toggle('fa-pause')

        if (document.querySelector('#play i').classList.contains('fa-play')) {
            audio.pause()
        }

        if (document.querySelector('#play i').classList.contains('fa-pause')) {
            audio.play()
        }
    })

    reloadButton.addEventListener('click', function () {
        audio.load()
        audio.currentTime = 0
        audio.play()

        document.querySelector('#play i').classList.remove('fa-play')
        document.querySelector('#play i').classList.add('fa-pause')
    })

    audio.addEventListener('timeupdate', function () {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        var progress = (currentTime / duration) * 100;
        progressBar.value = progress;

        if (progressBar.value == 100) {
            document.querySelector('#play i').classList.add('fa-play')
            document.querySelector('#play i').classList.remove('fa-pause')
        }
    });




    nextBtn.onclick = function () {
        if (nextBtn.classList.contains("disable")) {
            return false;
        } else {
            currentSlide++;
            theChecker();
        }
    }

    prevBtn.onclick = function () {
        if (prevBtn.classList.contains('disable')) {
            return false
        } else {
            currentSlide--
            theChecker()
        }
    }

    theChecker()

    function theChecker() {
        pageNum.innerHTML = `${slider.length} - ${currentSlide}`;

        removeActive();

        slider[currentSlide - 1].classList.add('active')

        if (currentSlide == 1) {
            prevBtn.classList.add('disable')
        } else {
            prevBtn.classList.remove('disable')
        }

        if (currentSlide == slider.length) {
            nextBtn.classList.add('disable')
        } else {
            nextBtn.classList.remove('disable')
        }

    }

    function removeActive() {
        slider.forEach((img) => {
            img.classList.remove("active");
        });
    }



}