function toggleId(id) {
    document.getElementById(id).style.display = (document.getElementById(id).style.display === "" || document.getElementById(id).style.display === "block") ? "none" : "block"
}
function on() {
    ["r", "y", "g"].map(x => document.getElementById(x).style.display = "block")
}