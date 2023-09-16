const slider = document.querySelectorAll('.slider')
const buttonPrev = document.getElementById('prev-button')
const buttonNext = document.getElementById('next-button')

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider  ()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

buttonNext.addEventListener('click', nextSlider)
buttonPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 7000)
//Carrousel Pronto




const buttonPersonal = document.getElementById("personal-account");
const modalPersonal = document.getElementById("personal-dialog");
const buttonPersonalBack = document.getElementById("personal-back");

buttonPersonal.onclick = function () {
    modalPersonal.showModal();
}

buttonPersonalBack.onclick = function () {
    modalPersonal.close();
}





const buttonBusiness = document.getElementById("business-account");
const modalBusiness = document.getElementById("business-dialog");
const buttonBusinessBack = document.getElementById("business-back");


buttonBusiness.onclick = function () {
    modalBusiness.showModal();
}

buttonBusinessBack.onclick = function () {
    modalBusiness.close();
}







