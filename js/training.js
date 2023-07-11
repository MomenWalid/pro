window.addEventListener('beforeunload', function (event) {

    event.preventDefault();

    const confirmationMessage = 'Are you sure you want to leave this page?';

    event.returnValue = confirmationMessage;
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("copy", function (e) {
    e.preventDefault();
});

document.addEventListener("paste", function (e) {
    e.preventDefault();
});



let duration = 2 * 60 * 60 * 1000
let twoHours = new Date().getTime() + duration

let count = setInterval(() => {

    let date = new Date().getTime()

    let dateDiff = twoHours - date

    let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".hours").innerHTML =
        hour < 10 ? `0${hour}  ` : `${hour}  `;
    document.querySelector(".minutes").innerHTML =
        minute < 10 ? `0${minute}  : ` : `${minute}  : `;
    document.querySelector(".seconds").innerHTML =
        second < 10 ? `0${second} : ` : `${second} : `;

    if (hour <= 0 && minute <= 0 && second <= 0) {
        clearInterval(count)

        let timer = document.querySelector('.training .timer')
        timer.classList.add('finish')
        timer.innerHTML = ''

        let span = document.createElement('span')
        span.innerHTML = '00:00:00'
        span.style.color = '#ff0000'

        let h4 = document.createElement('h4')
        let h4Text = document.createTextNode('Time has Finished')
        h4.appendChild(h4Text)

        let a = document.createElement('a')
        let aText = document.createTextNode('Exit')
        a.appendChild(aText)
        a.className = 'btn btn-danger'
        a.href = 'start/letters.html'

        timer.appendChild(span)
        timer.appendChild(h4)
        timer.appendChild(a)


        document.querySelector('.overlay').style.top = 0


        setTimeout(function () {
            window.location.href = 'start/letters.html'
        }, 3000)




    }
}, 1000)






function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetElement = event.target;
    if (targetElement.classList.contains(event.target.className)) {
        targetElement.classList.add("dropped");
        targetElement.innerHTML = draggedElement.innerHTML;
        draggedElement.setAttribute("draggable", "false");
        draggedElement.classList.add("dragged");
    }
}

// Esay Question
let submitEsay = document.querySelectorAll('.esay button');
let inputEsay = document.querySelectorAll('.esay input')

submitEsay[0].onclick = function () {
    submitEsay[0].disabled = true;
    if (inputEsay[0].value == 'القاهرة') {
        submitEsay[0].classList.add('btn-success')
        submitEsay[0].classList.remove('btn-primary')
        submitEsay[0].innerHTML = '  اجابة صحيحة'

        correctAnswer()

    } else {
        submitEsay[0].classList.add('btn-danger')
        submitEsay[0].classList.remove('btn-primary')
        submitEsay[0].innerHTML = 'اجابة خاطئة'

        document.querySelector('.esay #q1 p').innerHTML = 'الاجابة هي القاهرة'

        wrongAnswer()
    }
}

submitEsay[1].onclick = function () {
    submitEsay[1].disabled = true;
    if (inputEsay[1].value == 'اسيا') {
        submitEsay[1].classList.add('btn-success')
        submitEsay[1].classList.remove('btn-primary')
        submitEsay[1].innerHTML = '  اجابة صحيحة'


        correctAnswer()

    } else {
        submitEsay[1].classList.add('btn-danger')
        submitEsay[1].classList.remove('btn-primary')
        submitEsay[1].innerHTML = 'اجابة خاطئة'

        document.querySelector('.esay #q2 p').innerHTML = 'الاجابة هي اسيا'

        wrongAnswer()
    }
}


// MCQ Question
let submitMCQ = document.querySelectorAll('.mcq button')
let inputMCQ1 = document.querySelectorAll('.mcq #q1 input')
let inputMCQ2 = document.querySelectorAll('.mcq #q2 input')

submitMCQ[0].onclick = function () {
    submitMCQ[0].disabled = true;
    if (inputMCQ1[0].checked && inputMCQ1[1].checked && inputMCQ1[2].checked) {
        submitMCQ[0].classList.add('btn-success')
        submitMCQ[0].classList.remove('btn-primary')
        submitMCQ[0].innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {
        submitMCQ[0].classList.add('btn-danger')
        submitMCQ[0].classList.remove('btn-primary')
        submitMCQ[0].innerHTML = 'اجابة خاطئة'

        inputMCQ1[0].checked = true
        inputMCQ1[1].checked = true
        inputMCQ1[2].checked = true
        inputMCQ1[3].checked = false

        inputMCQ1[0].disabled = true
        inputMCQ1[1].disabled = true
        inputMCQ1[2].disabled = true
        inputMCQ1[3].disabled = true


        wrongAnswer()

    }
}

submitMCQ[1].onclick = function () {
    submitMCQ[1].disabled = true;
    if (inputMCQ2[0].checked && inputMCQ2[3].checked) {
        submitMCQ[1].classList.add('btn-success')
        submitMCQ[1].classList.remove('btn-primary')
        submitMCQ[1].innerHTML = 'اجابة صحيحة'

        correctAnswer()
    } else {
        submitMCQ[1].classList.add('btn-danger')
        submitMCQ[1].classList.remove('btn-primary')
        submitMCQ[1].innerHTML = 'اجابة خاطئة'

        inputMCQ2[0].checked = true
        inputMCQ2[1].checked = false
        inputMCQ2[2].checked = false
        inputMCQ2[3].checked = true

        inputMCQ2[0].disabled = true
        inputMCQ2[1].disabled = true
        inputMCQ2[2].disabled = true
        inputMCQ2[3].disabled = true


        wrongAnswer()

    }
}


// one Question 
let submitQa = document.querySelectorAll('.qa button')
let inputQa1 = document.querySelectorAll('.qa #q1 input')
let inputQa2 = document.querySelectorAll('.qa #q2 input')

submitQa[0].onclick = function () {
    submitQa[0].disabled = true;
    if (inputQa1[2].checked) {
        submitQa[0].classList.add('btn-success')
        submitQa[0].classList.remove('btn-primary')
        submitQa[0].innerHTML = 'اجابة صحيحة'


        correctAnswer()

    } else {
        submitQa[0].classList.add('btn-danger')
        submitQa[0].classList.remove('btn-primary')
        submitQa[0].innerHTML = 'اجابة خاطئة'

        inputQa1[0].checked = true
        inputQa1[1].checked = true
        inputQa1[2].checked = true
        inputQa1[3].checked = false

        inputQa1[0].disabled = true
        inputQa1[1].disabled = true
        inputQa1[2].disabled = true
        inputQa1[3].disabled = true


        wrongAnswer()


    }
}

submitQa[1].onclick = function () {
    submitQa[1].disabled = true;

    if (inputQa2[1].checked) {

        submitQa[1].classList.add('btn-success')
        submitQa[1].classList.remove('btn-primary')
        submitQa[1].innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {
        submitQa[1].classList.add('btn-danger')
        submitQa[1].classList.remove('btn-primary')
        submitQa[1].innerHTML = 'اجابة خاطئة'

        inputQa2[0].checked = false
        inputQa2[1].checked = true
        inputQa2[2].checked = false
        inputQa2[3].checked = false

        inputQa2[0].disabled = true
        inputQa2[1].disabled = true
        inputQa2[2].disabled = true
        inputQa2[3].disabled = true

        wrongAnswer()

    }
}


// True False Question
let submitTF = document.querySelectorAll('.true-false button')
let inputTF1 = document.querySelectorAll('.true-false #q1 input')
let inputTF2 = document.querySelectorAll('.true-false #q2 input')

submitTF[0].onclick = function () {
    submitTF[0].disabled = true

    if (inputTF1[0].checked) {

        submitTF[0].classList.add('btn-success')
        submitTF[0].classList.remove('btn-primary')
        submitTF[0].innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {

        submitTF[0].classList.add('btn-danger')
        submitTF[0].classList.remove('btn-primary')
        submitTF[0].innerHTML = 'اجابة خاطئة'

        inputTF1[0].checked = true
        inputTF1[1].checked = false

        inputTF1[0].disabled = true
        inputTF1[1].disabled =


            wrongAnswer()
    }

}

submitTF[1].onclick = function () {
    submitTF[1].disabled = true

    if (inputTF2[1].checked) {

        submitTF[1].classList.add('btn-success')
        submitTF[1].classList.remove('btn-primary')
        submitTF[1].innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {

        submitTF[1].classList.add('btn-danger')
        submitTF[1].classList.remove('btn-primary')
        submitTF[1].innerHTML = 'اجابة خاطئة'

        inputTF2[0].checked = false
        inputTF2[1].checked = true

        inputTF2[0].disabled = true
        inputTF2[1].disabled = true

        wrongAnswer()
    }
}

// Match Question
let submitMatch = document.querySelectorAll('.match button')
let select1 = document.querySelectorAll('.match #q1 select')
let select2 = document.querySelectorAll('.match #q2 select')

submitMatch[0].onclick = function () {

    submitMatch[0].disabled = true

    if (select1[0].value == 'blue' && select1[1].value == 'red' && select1[2].value == 'green') {

        submitMatch[0].classList.add('btn-success')
        submitMatch[0].classList.remove('btn-primary')
        submitMatch[0].innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {
        submitMatch[0].classList.add('btn-danger')
        submitMatch[0].classList.remove('btn-primary')
        submitMatch[0].innerHTML = 'اجابة خاطئة'

        select1[0].value = 'blue'
        select1[1].value = 'red'
        select1[2].value = 'green'

        select1[0].disabled = true
        select1[1].disabled = true
        select1[2].disabled = true

        wrongAnswer()
    }
}

submitMatch[1].onclick = function () {

    submitMatch[1].disabled = true

    if (select2[0].value == 'cir' && select2[1].value == 'rid' && select2[2].value == 'gaz') {

        submitMatch[1].classList.add('btn-success')
        submitMatch[1].classList.remove('btn-primary')
        submitMatch[1].innerHTML = 'اجابة صحيحة'

        correctAnswer()
    } else {
        submitMatch[1].classList.add('btn-danger')
        submitMatch[1].classList.remove('btn-primary')
        submitMatch[1].innerHTML = 'اجابة خاطئة'

        select2[0].value = 'cir'
        select2[1].value = 'rid'
        select2[2].value = 'gaz'

        select2[0].disabled = true
        select2[1].disabled = true
        select2[2].disabled = true

        wrongAnswer()
    }


}


// Drag & Drop Question
let submitDragDrop = document.querySelector('.dragdrop button')

submitDragDrop.onclick = function () {
    submitDragDrop.disabled = true

    let back1 = document.getElementById("back1");
    let back2 = document.getElementById("back2");
    let back3 = document.getElementById("back3");


    if (back1.innerHTML == "ازرق" && back2.innerHTML == "احمر" && back3.innerHTML == "اخضر") {

        submitDragDrop.classList.add('btn-success')
        submitDragDrop.classList.remove('btn-primary')
        submitDragDrop.innerHTML = 'اجابة صحيحة'

        correctAnswer()

    } else {
        submitDragDrop.classList.add('btn-danger')
        submitDragDrop.classList.remove('btn-primary')
        submitDragDrop.innerHTML = 'اجابة خاطئة'

        wrongAnswer()
    }
}


function correctAnswer() {

    let right = document.querySelectorAll('.audio .right audio')

    let randomAudio = Math.floor(Math.random() * right.length)

    right[randomAudio].play();

    let overlayRight = document.querySelector('.overlay.right')

    overlayRight.style.top = '0'
    setTimeout(function () {
        overlayRight.style.top = '-100%'
    }, 2000)
}

function wrongAnswer() {

    let wrong = document.querySelectorAll('.audio .wrong audio')

    let randomAudio = Math.floor(Math.random() * wrong.length)

    wrong[randomAudio].play();


    let overlayWrong = document.querySelector('.overlay.wrong')

    overlayWrong.style.top = '0'
    setTimeout(function () {
        overlayWrong.style.top = '-100%'
    }, 2000)
}




