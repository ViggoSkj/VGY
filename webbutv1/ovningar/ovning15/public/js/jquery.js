$("#show-jq").on("click", () => {
    $("#lorem-jq").show()
})

$("#hide-jq").on("click", () => {
    $("#lorem-jq").hide()
})


$("#toggle-title").on("click", () => {
    $("#title").toggle("fast")
})

$("#author").on("mouseenter", () => {
    $("#author").addClass("red")
})

$("#author").on("mouseleave", () => {
    $("#author").removeClass("red")
})

$("#h0").on("click", () => {
    $(".r0").toggleClass("hide")
})
$("#h1").on("click", () => {
    $(".r1").toggleClass("hide")
})
$("#h2").on("click", () => {
    $(".r2").toggleClass("hide")
})

$(".r0").on("mouseenter", () => {
    $(".r0").addClass("hide")
})
$(".r1").on("mouseenter", () => {
    $(".r1").addClass("hide")
})
$(".r2").on("mouseenter", () => {
    $(".r2").addClass("hide")
})


$(".r0").on("mouseleave", () => {
    $(".r0").removeClass("hide")
})
$(".r1").on("mouseleave", () => {
    $(".r1").removeClass("hide")
})
$(".r2").on("mouseleave", () => {
    $(".r2").removeClass("hide")
})