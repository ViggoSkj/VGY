<header>
    <marquee><h1 id="webbutveckling-2">webbutveckling 2</h1></marquee>
</header>

<script>
    function header() {
        // text thing
        const hex = "0123456789ABCDEF"

        const randomColor = () => {
            return `#${Array(6).fill(0).map(x => hex[Math.floor(Math.random()*hex.length)]).join("")}`
        }

        let i = 0
        setInterval(() => {
            const text = "webbutveckling 2" + ".".repeat(i % 4)
            const formated = text.split("").map(x => `<span style="color: ${randomColor()}">${x}</span>`).join("")
            document.getElementById("webbutveckling-2").innerHTML = formated
            i++
        }, 250)
    }

    header()
</script>