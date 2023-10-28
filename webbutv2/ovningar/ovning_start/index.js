function a() {
    document.getElementById("a-text").innerText = "viggo"
}

function b() {
    const [x, y, z] = [12, 34, 56]
    s = x + y + z
    document.getElementById("b-text").innerText = s
}

function c() {
    const [x, y, z] = [12, 34, 56]
    s = x + y + z
    document.getElementById("c-text").innerText = s
}

function d() {
    document.getElementById("d-input").value = "viggo"
}

function e() {
    document.getElementById("e-button").addEventListener("click", () => {
        document.getElementById("e-text").innerText = "viggo"
    })
}

function f() {
    document.getElementById("f-button").addEventListener("click", () => {
        document.getElementById("f-text").innerText += "viggo"
    })
}

function g() {
    let clicks = 0
    document.getElementById("g-button").addEventListener("click", () => {
        clicks++
        document.getElementById("g-text").innerText = `antal click: ${clicks}`
    })
}

function i() {
    let x = 22, y = 7;
    document.getElementById('i-jsbuttonx').addEventListener('click', jsfunktionz);
    document.getElementById('i-jsbuttonxx').addEventListener('click', jsfunktionzz);
    function jsfunktionz() {
        x = 1;
        var y = 3, z = 4;
        document.getElementById("i-jsdivx").innerHTML +=
            "<hr>" + "x=" + x + "<br />" + "y=" + y + "<br />" + "z=" + z;
    }

    function jsfunktionzz() {
        document.getElementById("i-jsdivx").innerHTML =
            document.getElementById("i-jsdivx").innerHTML +
            "<hr>" + "x=" + x + "<br />" + "y=" + y;
    }
}

function j() {
    let x = 22, y = 7;
    document.getElementById('j-jsbuttonx').addEventListener('click', jsfunktionz);
    document.getElementById('j-jsbuttonxx').addEventListener('click', jsfunktionzz);
    function jsfunktionz() {
        x = 1;
        var y = 3, z = 4;
        document.getElementById("j-jsdivx").innerHTML +=
            "<hr>" + "x=" + x + "<br />" + "y=" + y + "<br />" + "z=" + z;
    }

    function jsfunktionzz() {
        try {
            document.getElementById("j-jsdivx").innerHTML =
                document.getElementById("j-jsdivx").innerHTML +
                "<hr>" + "x=" + x + "<br />" + "y=" + y + "z=" + z;
        } catch (err) {
            console.error(err)
        }
    }
}

function k() {
    let x = 22, y = 7;
    document.getElementById('k-jsbuttonx').addEventListener('click', jsfunktionz);
    document.getElementById('k-jsbuttonxx').addEventListener('click', jsfunktionzz);
    function jsfunktionz() {
        var x = 1;
        var y = 3, z = 4;
        document.getElementById("k-jsdivx").innerHTML +=
            "<hr>" + "x=" + x + "<br />" + "y=" + y + "<br />" + "z=" + z;
    }

    function jsfunktionzz() {
        document.getElementById("k-jsdivx").innerHTML =
            document.getElementById("k-jsdivx").innerHTML +
            "<hr>" + "x=" + x + "<br />" + "y=" + y;
    }
}

function l() {
    let y = 7;
    document.getElementById("l-jsba").addEventListener('click', testa);
    document.getElementById("l-jsbb").addEventListener('click', testb);
    function testa() {
        "use strict";
        let x = 1;
        document.getElementById("l-jsdivx").innerHTML +=
            "<hr>" + "x=" + x + "<br />" + "y=" + y + "<br />";
    }

    function testb() {
        "use strict";
        var x = "HEJ!";
        document.getElementById("l-jsdivx").innerHTML +=
            "<hr>" + "x=" + x + "<br />" + "y=" + y;
    }
}

a()
b()
c()
d()
e()
f()
g()
i()
j()
k()
l()