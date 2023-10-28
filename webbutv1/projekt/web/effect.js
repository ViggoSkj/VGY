const Effect = () => {
    const canvas = document.getElementById("effect-canvas")
    const parent = canvas.parentElement
    const ctx = canvas.getContext("2d")

    const width = document.defaultView.getComputedStyle(parent).width.split("px")[0]
    const height = document.defaultView.getComputedStyle(parent).height.split("px")[0]
    canvas.width = width
    canvas.height = height

    //////////////////////////////////////
    ////////////////////////////////////// dynamic cell matrix simulation (dcms)
    //////////////////////////////////////

    const cells = 100
    const cellHeight = height/cells
    const cellWidth = width/cells

    let particleMatrix = Array(cells).fill(Array(cells).fill(0)).map(row => row.map(particle => {
        if (Math.random() < 0.01) return 10
        return Math.random()*0
    }))

    const simulationStep = (dt) => {
        const padding = 0
        let paddedMatrix = JSON.parse(JSON.stringify(particleMatrix)) // create deep copy
        paddedMatrix.push(Array(cells).fill(padding))
        paddedMatrix.unshift(Array(cells).fill(padding))
        paddedMatrix = paddedMatrix.map((x, i) => [Math.sin(i/10), ...x, Math.cos(i/10)])

        particleMatrix = particleMatrix.map((row, x) => row.map((particle, y) => {
            const paddedX = x + 1
            const paddedY = y + 1

            const neighborMatrix = [-1, 0, 1].map(i => [-1, 0, 1].map(j => {
                return paddedMatrix[paddedX + i][paddedY + j]/Math.sqrt(j*j + i*i)
            })).reduce((a, c) => [...a, ...c], []).filter((t, i) => i !== 4)
            const dif = neighborMatrix.reduce((a, c) => a + c/(4*(1+Math.sqrt(0.5))), 0) - particle
            const speed=5
            return dif*dt*5*Math.log(cells) + particle
        }))
    }

    const insertHeat = (x, y) => {
        const cellX = Math.floor(x/cellWidth)
        const cellY = Math.floor(y/cellHeight)

        particleMatrix[cellX][cellY] += 10
    } 

    const drawSimulationParticle = (x, y, value) => {
        const r = 255 * value
        const g = 40*value
        const b = 10*value
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`

        ctx.fillRect(x*cellWidth, y*cellHeight, cellWidth+1, cellHeight+1)
    }

    const renderSimulationMatrix = () => {zz
        particleMatrix.map((row, x) => {
            row.map((particle, y) => {
                drawSimulationParticle(x, y, particle)
            })
        })
    }

    
    //////////////////////////////////////
    ////////////////////////////////////// random particles
    //////////////////////////////////////


    const uvRandom = (seed) => {
        seed = seed & 0xffffffff
        seed = (seed + 0x7ed55d16 + (seed << 12)) & 0xffffffff
        seed = (seed ^ 0xc761c23c ^ (seed >>> 19)) & 0xffffffff
        seed = (seed + 0x165667b1 + (seed << 5)) & 0xffffffff
        seed = ((seed + 0xd3a2646c) ^ (seed << 9)) & 0xffffffff
        seed = (seed + 0xfd7046c5 + (seed << 3)) & 0xffffffff
        seed = (seed ^ 0xb55a4f09 ^ (seed >>> 16)) & 0xffffffff
        return (seed & 0xfffffff) / 0x10000000
    } 

    const drawParticle = (x, y, color) => {
        const r = 0
        const g = Math.sin(x/10)*255
        const b = 0
        ctx.fillStyle = color || `rgb(${r}, ${g}, ${b})`

        ctx.fillRect(x, y, 5*Math.sin(x*y/1000), 5*Math.sin(x*y/1000))
    }

    const draw = (t) => {
        ctx.fillStyle = `#000000`
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        const particle1Count = 0
        
        for (let x = 0; x < particle1Count; x++) {
            for (let y = 0; y < particle1Count; y++) {
                drawParticle(uvRandom(x*y*10)*width + Math.sin(t + x)*10, uvRandom(y*x)*height + Math.cos(t + y)*10)
            }
        }

        renderSimulationMatrix()
    }

    let mouseDown = false

    canvas.onmousedown = () => mouseDown = true
    canvas.onmouseup = () => mouseDown = false

    canvas.onmousemove = (event) => {
        if (mouseDown) {
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            insertHeat(x, y)
        }
    }

    return {
        draw,
        simulationStep
    }
}

const effect = Effect()

let t = 0
setInterval(() => {
    effect.draw(t)
    t += 0.1
}, 20)

setInterval(() => {
    effect.simulationStep(40/1000)
}, 40)