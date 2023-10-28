function Wheel(id, radius, originX, originY) {
    const elements = Array.from(document.getElementById(id).children)

    elements.forEach(e => {
        e.style.position = "absolute"
    })

    setInterval(() => {
        const seconds = Date.now()/1000
        elements.forEach((e, i) => {
            const r = (Math.PI*2/elements.length) * i
            e.style.left = originX + Math.sin(r + seconds)*radius + "px"
            e.style.top = originY + Math.cos(r + seconds)*radius + "px"
        })
    }, 1 / 60)
}