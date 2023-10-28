Array.from(document.getElementsByClassName("faq-question-toggler")).forEach(x => {

    x.addEventListener("click", () => {
        x.parentElement.classList.toggle("closed")
    })
})