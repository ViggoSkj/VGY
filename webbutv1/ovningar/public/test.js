async function t() {
    const css = document.getElementById("test");
    var t = await fetch("https://labb.vgy.se/~antonlm/ovningar/css/css_ovning3.css")
    var text = await t.text()
    css.innerHTML = text
}

t()