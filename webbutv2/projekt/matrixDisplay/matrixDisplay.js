// SHOWCASE

function MatrixDisplay() {
    let resolution = [500, 500]
    let matrix = null
    let canvasWidth = NaN
    let canvasHeight = NaN
    let canvas = null
    let ctx = null

    let msPerSecondDraw = 0
    let msPerSecondCalc = 0

    const setMatrix = (newMatrix) => {
        matrix = newMatrix
    }

    const setCanvas = (myCanvas) => {
        canvas = myCanvas
        canvasWidth = myCanvas.width
        canvasHeight = myCanvas.height
        ctx = canvas.getContext("2d")
    }

    const interpolate = (a, b, x) => {
        return a + (b - a)*x
    }
    
    const interpolateColor = (a, b, x) => {
        return [
            Math.floor(interpolate(a[0], b[0], x)),
            Math.floor(interpolate(a[1], b[1], x)),
            Math.floor(interpolate(a[2], b[2], x)),
        ]
    }

    const getColor = (x, y) => {
        const matrixWidth = matrix[0].length-1
        const matrixHeight = matrix.length-1
        const rx = (matrixWidth)/(resolution[0])
        const ry = (matrixHeight)/(resolution[1])
        
        const uv = [rx * x, ry * y]
        const topLeft = matrix[Math.floor(uv[1])][Math.ceil(uv[0])]
        const topRight = matrix[Math.floor(uv[1])][Math.floor(uv[0])]
        const bottomRight = matrix[Math.ceil(uv[1])][Math.ceil(uv[0])]
        const bottomLeft = matrix[Math.ceil(uv[1])][Math.floor(uv[0])]

        const relativeP = [uv[0] - Math.floor(uv[0]), uv[1] - Math.floor(uv[1])]
        const i1 = interpolateColor(topRight, topLeft, relativeP[0])
        const i2 = interpolateColor(bottomLeft, bottomRight, relativeP[0])
        const i3 = interpolateColor(i1, i2, relativeP[1])

        return i3
    }

    const workerCalculateRows = (rowCount) => {
        const myWorker = new Worker()
    }

    const draw = () => {
        const rx = canvasWidth/resolution[0]
        const ry = canvasHeight/resolution[1]
        ctx.fillStyle = "#F"
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
        msPerSecondCalc = 0
        msPerSecondDraw = 0

        const start = performance.now()
        let pixelData = new Uint8ClampedArray(resolution[0] * resolution[1] * 4)
        for (let x = 0; x < resolution[0]; x++) {
            for (let y = 0; y < resolution[1]; y++) {
                const color = getColor(x, y)
                
                pixelData[4 * (x*resolution[0] + y) + 0] = color[0]
                pixelData[4 * (x*resolution[0] + y) + 1] = color[1]
                pixelData[4 * (x*resolution[0] + y) + 2] = color[2]
                pixelData[4 * (x*resolution[0] + y) + 3] = 255
            }
        }
        msPerSecondCalc = performance.now() - start

        const drawStart = Date.now()
        let imageData = new ImageData(pixelData, resolution[0], resolution[1])
        ctx.putImageData(imageData, 0, 0)
        msPerSecondDraw += Date.now() - drawStart

        msPerSecondDraw /= (performance.now() - start)/1000
        console.log([msPerSecondCalc, msPerSecondDraw])
    }

    return {
        setMatrix,
        setCanvas,
        draw
    }
}