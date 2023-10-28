let state = "none"
document.getElementById("on").addEventListener("click", () => {["r", "y", "g"].map(x =>
document.getElementById(x).style.display = state); state = (state === "block") ? "none" : "block"});

["rb", "yb", "gb"].map(x => document.getElementById(x).addEventListener("mousedown", () =>
document.getElementById(x.split("b")[0]).style.display = (document.getElementById(x.split("b")[0]).style.display === "none") ? "block" : "none"))
Array.prototype.map.call(document.getElementsByClassName("lamptest"), (x, i) => {x.addEventListener("mouseover", () =>
document.getElementsByTagName("img")[0].src = ["public/media/trafikljus", ["red","yellow","green",].filter((e, b) => b === i)[0], "blink.gif"].join("-")),
x.addEventListener("mouseleave", () => document.getElementsByTagName("img")[0].src = "public/media/trafikljus-start.gif")})



/**
 * 

document.getElementById("on").addEventListener("click", () => ["r", "y", "g"].map(x => document.getElementById(x).style.display = "block"));
["rb", "yb", "gb"].map(x => document.getElementById(x).addEventListener("mousedown", () =>
document.getElementById(x.split("b")[0]).style.display = (document.getElementById(x.split("b")[0]).style.display === "none") ? "block" : "none"))
Array.prototype.map.call(document.getElementsByClassName("lamptest"), (x, i) => {x.addEventListener("mouseover", () =>
document.getElementsByTagName("img")[0].src = ["public/media/trafikljus", ["red","yellow","green",].filter((e, b) => b === i)[0], "blink.gif"].join("-")),
x.addEventListener("mouseleave", () => document.getElementsByTagName("img")[0].src = "public/media/trafikljus-start.gif")})


 *
 */