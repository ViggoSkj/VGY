document.getElementById("show-js").addEventListener("click", () => {
    document.getElementById("lorem-js").style.display = "block"
})
document.getElementById("hide-js").addEventListener("click", () => {
    document.getElementById("lorem-js").style.display = "none"
})

document.getElementById("copy-button").addEventListener("click", () => {
    const value = document.getElementById("copy-text").value
    document.getElementById("copy-reciver").textContent = value
    document.getElementById("copy-text").value = ""
})