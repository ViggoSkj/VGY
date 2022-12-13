console.log(1)

let slideCounter = 0
let slideCount = 0
let slides = []




///////////////////////////////////////////////
///////////////////////////////////////////////   Slide navigation
///////////////////////////////////////////////
function GetSlides() {
    return document.getElementsByClassName("slide")
}

function GetOperatingSlide() {
    return slideCounter%slideCount
}

function ShiftSlide(dir) {
    slideCounter += dir
}
function nextSlide() {
    ShiftSlide(1)
    UpdateVisibleSlide()
}
function prevSlide() {
    ShiftSlide(-1)
    UpdateVisibleSlide()
}


///////////////////////////////////////////////
///////////////////////////////////////////////   Slide showing and hiding
///////////////////////////////////////////////

function UpdateVisibleSlide() {
    for (var i = 0; i < slides.length; i++) {
        let slide = slides[i]
        if (i == GetOperatingSlide()) {
            slide.id = "current"
        } else {
            slide.id = ""
        }
    }
}




slides = GetSlides()
slideCount = slides.length