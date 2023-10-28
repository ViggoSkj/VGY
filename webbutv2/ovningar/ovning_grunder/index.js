function a() {
    document.getElementById("a-button").addEventListener("click", () => {
        document.getElementById("a-text").innerText = document.getElementById("a-input").value
    })
}

function b() {
    document.getElementById("b-button").addEventListener("click", () => {
        document.getElementById("b-text").innerText =
            document.getElementById("b-input-1").value +
            document.getElementById("b-input-2").value
    })
}

function c() {
    document.getElementById("c-button").addEventListener("click", () => {
        document.getElementById("c-text").innerText =
            Number(document.getElementById("c-input-1").value) +
            Number(document.getElementById("c-input-2").value)
    })
}

function d() {
    document.getElementById("d-button").addEventListener("click", () => {
        document.getElementById("d-text").innerText =
            (Number(document.getElementById("d-input-1").value) +
            Number(document.getElementById("d-input-2").value) +
            Number(document.getElementById("d-input-3").value))/3
    })
}

function e() {
    document.getElementById("e-button").addEventListener("click", () => {
        const price = Number(document.getElementById("e-input-1").value)
        const percentage =  Number(document.getElementById("e-input-2").value)
        const finalPrice = price*(1-percentage/100.0)
        
        document.getElementById("e-text").innerText = `original: ${price} final price: ${finalPrice} percentage off: ${percentage}`
    })
}

function f() {
    document.getElementById("f-text").innerText = 123456%99
}

function g() {
    document.getElementById("g-button").addEventListener("click", () => {
        document.getElementById("g-text").innerText =
            (Number(document.getElementById("g-input-1").value) +
            Number(document.getElementById("g-input-2").value) +
            Number(document.getElementById("g-input-3").value))/3
    })
}

function h() {
    document.getElementById("h-button").addEventListener("click", () => {
        const decimalCount = Number(document.getElementById("h-input-4").value)
        const n = (Number(document.getElementById("h-input-1").value) +
            Number(document.getElementById("h-input-2").value) +
            Number(document.getElementById("h-input-3").value)) / 3.0

        let decimal = String(Math.floor(n*Math.pow(10, decimalCount))%Math.pow(10, decimalCount))
        decimal += "0".repeat(decimalCount - decimal.length)
        document.getElementById("h-text").innerText = Math.floor(n) + "." + decimal
    })
}

a()
b()
c()
d()
e()
f()
g()
h()