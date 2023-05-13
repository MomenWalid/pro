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
    if (targetElement.classList.contains("back")) {
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
    } else {
        submitEsay[0].classList.add('btn-danger')
        submitEsay[0].classList.remove('btn-primary')
        submitEsay[0].innerHTML = 'اجابة خاطئة'

        document.querySelector('.esay #q1 p').innerHTML = 'الاجابة هي القاهرة'
    }
}

submitEsay[1].onclick = function () {
    submitEsay[1].disabled = true;
    if (inputEsay[1].value == 'اسيا') {
        submitEsay[1].classList.add('btn-success')
        submitEsay[1].classList.remove('btn-primary')
        submitEsay[1].innerHTML = '  اجابة صحيحة'
    } else {
        submitEsay[1].classList.add('btn-danger')
        submitEsay[1].classList.remove('btn-primary')
        submitEsay[1].innerHTML = 'اجابة خاطئة'

        document.querySelector('.esay #q2 p').innerHTML = 'الاجابة هي اسيا'
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

    }
}

submitMCQ[1].onclick = function () {
    submitMCQ[1].disabled = true;
    if (inputMCQ2[0].checked && inputMCQ2[3].checked) {
        submitMCQ[1].classList.add('btn-success')
        submitMCQ[1].classList.remove('btn-primary')
        submitMCQ[1].innerHTML = 'اجابة صحيحة'
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


    }
}

submitQa[1].onclick = function () {
    submitQa[1].disabled = true;

    if (inputQa2[1].checked) {

        submitQa[1].classList.add('btn-success')
        submitQa[1].classList.remove('btn-primary')
        submitQa[1].innerHTML = 'اجابة صحيحة'

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

    } else {

        submitTF[0].classList.add('btn-danger')
        submitTF[0].classList.remove('btn-primary')
        submitTF[0].innerHTML = 'اجابة خاطئة'

        inputTF1[0].checked = true
        inputTF1[1].checked = false

        inputTF1[0].disabled = true
        inputTF1[1].disabled = true
    }

}

submitTF[1].onclick = function () {
    submitTF[1].disabled = true

    if (inputTF2[1].checked) {

        submitTF[1].classList.add('btn-success')
        submitTF[1].classList.remove('btn-primary')
        submitTF[1].innerHTML = 'اجابة صحيحة'

    } else {

        submitTF[1].classList.add('btn-danger')
        submitTF[1].classList.remove('btn-primary')
        submitTF[1].innerHTML = 'اجابة خاطئة'

        inputTF2[0].checked = false
        inputTF2[1].checked = true

        inputTF2[0].disabled = true
        inputTF2[1].disabled = true
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
    }
}

submitMatch[1].onclick = function () {

    submitMatch[1].disabled = true

    if (select2[0].value == 'cir' && select2[1].value == 'rid' && select2[2].value == 'gaz') {

        submitMatch[1].classList.add('btn-success')
        submitMatch[1].classList.remove('btn-primary')
        submitMatch[1].innerHTML = 'اجابة صحيحة'
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

    } else {
        submitDragDrop.classList.add('btn-danger')
        submitDragDrop.classList.remove('btn-primary')
        submitDragDrop.innerHTML = 'اجابة خاطئة'
    }
}
