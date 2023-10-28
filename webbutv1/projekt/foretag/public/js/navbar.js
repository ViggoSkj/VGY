function toggleNavbar(on) {
    if (on) {
        document.getElementById("navbar-expandable").classList.remove("off")
    } else {
        document.getElementById("navbar-expandable").classList.add("off")
    }
}

document.getElementById("toggle-navbar").addEventListener("click", () => {
    navbarToggled = !navbarToggled
    toggleNavbar(navbarToggled)
})

let navbarToggled = false
toggleNavbar(navbarToggled)
