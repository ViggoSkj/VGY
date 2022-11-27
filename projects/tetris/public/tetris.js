/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// GAME ENGINE ////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Engine CORE ////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////



// Engine
class Engine {
    static renderer = null;
    static objects = []

    static destroyBuffer = []
    static newObjectBuffer= []

    static ENGINE_SETTINGS = {
        ONLY_DRAW_RENDERER_OBJECT: true
    }

    ////////////////////////////////////
    //////////// Core functions
    ////////////////////////////////////
    static Init(renderer) {
        Engine.renderer = renderer
    }

    static Update() {
        // Destroy objects in buffer
        for (var i = 0; i < Engine.destroyBuffer.length; i++) {
            let index = Engine.GetObjectIndex(Engine.destroyBuffer[i].uuid)
            Engine.objects.splice(index, 1)
        }

        Engine.destroyBuffer = []

        // Update all object
        for (var i = 0; i < Engine.objects.length; i++) {
            Engine.UpdateObject(this.objects[i])
        }
    }

    ////////////////////////////////////
    //////////// Object Functions
    ////////////////////////////////////

    static InitializeObject(object) {
        object.Init()
    }

    static UpdateObject(object) {
        object.Update()
    }

    
    static CreateObject(cls, ...args) {
        var newObject = new cls()
        Engine.objects.push(new cls())
        newObject = Engine.objects[Engine.objects.length-1]
        newObject.Init(...args)
        return newObject
    }

    static GetObjectIndex(uuid) {
        for (var i = 0; i < Engine.objects.length; i++) {
            if (Engine.objects[i].uuid == uuid) return i
        }
        return -1
    }

    static DestroyObject(object) {
        this.destroyBuffer.push(object)
    }

    ////////////////////////////////////
    //////////// Rendering Functions
    ////////////////////////////////////
    
    static Draw() {
        let sortedRendererObjects = RendererObject.all.sort((a, b) => {return b.zIndex - a.zIndex})
        for (var i = 0; i < sortedRendererObjects.length; i++) {
            sortedRendererObjects[i].Draw()
        }
        
        if (!Engine.ENGINE_SETTINGS.ONLY_DRAW_RENDERER_OBJECT) {
            for (var i= 0; i < this.objects.length; i++) {
                if (!this.objects[i] instanceof RendererObject)
                    this.objects[i].Draw()
            }
        } 
    }

    static SetRenderer(renderer) {
        this.renderer = renderer
    }
}

class EngineObject {
    constructor() {
        this.uuid = Util.uuidv4()
    }

    Init() {

    }

    Update() {

    }

    Draw() {

    }

    Destroy() {
        Engine.DestroyObject(this)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Built In Objects //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

class RendererObject extends EngineObject {
    static all = []

    Init() {
        this.zIndex = Math.random()
        RendererObject.all.push(this)
    }

    Draw() {
        super.Draw()
    }

    Destroy() {
        for (var i = 0; i < RendererObject.all.length; i++) {
            if (RendererObject.all[i].uuid == this.uuid) {
                 RendererObject.all.splice(i, 1)
            }
        }
        super.Destroy()
    }

    // Setters And Getters
    SetZIndex(z) {
        this.z = z
    }
}

class GridRendererObject extends RendererObject {
    Init(cell, color) {
        super.Init()
        this.cell = cell
        this.color = color
        this.outlineWidth = 2
        this.outlineColor = new Color(1,1,1,1)
    }

    Draw() {
        super.Draw()
        Engine.renderer.DrawGridCellWithSubCells(this.cell.x, this.cell.y, this.color, this.outlineColor, this.outlineWidth)
    }
}

class GridCell extends EngineObject {
    Init(x, y) {
        this.x = x
        this.y = y
    }

    SetPosition(x, y) {
        this.x = x
        this.y = y
    }

    Move(x, y) {
        this.x += x
        this.y += y
    }

    CollidesWith(cell) {
        return (this.x == cell.x && this.y == cell.y)
    }

    IsInArea(xMin, yMin, xMax, yMax) {
        return (this.x >= xMin && this.y >= yMin && this.x <= xMax && this.y <= yMax)
    }

    Draw() {
        Engine.renderer.DrawCell(this)
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// UTIL //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


class Time {
    static deltaTime = 0
}

class Color {
    constructor (r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    } 

    Hex() {
        let rh = Util.DecimalToHex(this.r * 255.0)
        let gh = Util.DecimalToHex(this.g * 255.0)
        let bh = Util.DecimalToHex(this.b * 255.0)
        let ah = Util.DecimalToHex(this.a * 255.0)
        return "#" + rh + gh + bh + ah
    }
}


class Util {
    static uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    static DecimalToHex(value) {
        var hexSymbols = "0123456789ABCDEF"
        return hexSymbols[Math.floor(value/16)] + hexSymbols[Math.floor(value % 16)] 
    }
}

class Grid {
    constructor (xCount, yCount) {
        this.xCount = xCount
        this.yCount = yCount
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// INPUT //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

class Input {
    static KeyCodes = {
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        SPACE: 32,
    }

    static KeyState = {
        "DOWN" : 0,
        "PRESSED": 1,
        "UP": 2,
        "RELESED": 3,
    }

    static keyStates = {}
    static subscribers = []

    static keyStateUpdateBuffer = {

    }

    static Init() {
        for (const [key] in Input.KeyCodes) {
            Input.keyStates[Input.KeyCodes[key]] = Input.KeyState.UP
        }
    }

    static Update() {
        for (const key in Input.keyStateUpdateBuffer) {
            const oldState = Input.keyStates[key]
            const bufferState = Input.keyStateUpdateBuffer[key]
            var newState = undefined
            if (bufferState == Input.KeyState.PRESSED) {
                if (oldState == Input.KeyState.UP || oldState == Input.KeyState.RELESED) {
                    newState = Input.KeyState.PRESSED
                } else {
                    newState = Input.KeyState.DOWN
                }
            } else {
                if (oldState == Input.KeyState.DOWN || oldState == Input.KeyState.PRESSED) {
                    newState = Input.KeyState.RELESED
                } else {
                    newState = Input.KeyState.UP
                }
            }
            Input.keyStates[key] = newState
        }
    }

    static KeyDownEvent(e) {
        var keyCode = e.keyCode
        if (keyCode in Input.keyStates) {
            Input.keyStateUpdateBuffer[keyCode] = Input.KeyState.PRESSED
        }
    }
    static KeyUpEvent(e) {
        var keyCode = e.keyCode
        if (keyCode in Input.keyStates) {
            Input.keyStateUpdateBuffer[keyCode] = Input.KeyState.RELESED
        }
    }

    static GetKeyState(keyCode) {
        return Input.keyStates[keyCode]
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// RENDERING //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

class Renderer {
    static Init(ctx, canvas) {
        Renderer.ctx = ctx
        Renderer.canvas = canvas
    }

    static SetFillStyleHex(color) {
        Renderer.ctx.fillStyle = color.Hex()
    }

    static DrawSquare(x, y, width, height) {
        Renderer.ctx.fillRect(x, y, width, height)
    }
}


class GridRenderer extends Renderer {
    static Init(ctx, canvas) {
        super.Init(ctx, canvas)
        GridRenderer.subGridSize = 2
    }

    static DrawGridCell(x, y, color, outline=new Color(0,0,0,0), outlineWidth=0) {
        GridRenderer.SetFillStyleHex(outline)
        GridRenderer.DrawSquare(x * Settings.GRID_RENDER_SCALAR, y * Settings.GRID_RENDER_SCALAR, Settings.GRID_RENDER_SCALAR, Settings.GRID_RENDER_SCALAR)
        GridRenderer.SetFillStyleHex(color)
        GridRenderer.DrawSquare(x * Settings.GRID_RENDER_SCALAR+outlineWidth, y * Settings.GRID_RENDER_SCALAR+outlineWidth, Settings.GRID_RENDER_SCALAR-outlineWidth*2, Settings.GRID_RENDER_SCALAR-outlineWidth*2)
    }

    static DrawGridCellWithSubCells(cellX, cellY, color, outline=new Color(0,0,0,0), outlineWidth=0) {
        for (var x = 0; x < GridRenderer.subGridSize; x++) {
            for (var y = 0;  y < GridRenderer.subGridSize; y++) {
                this.DrawSubGridCell(cellX, cellY, x, y, color)
            }
        }
    }

    static DrawSubGridCell(x, y, subX, subY, color) {
        GridRenderer.SetFillStyleHex(color)
        GridRenderer.DrawSquare(
            x * Settings.GRID_RENDER_SCALAR + subX*Settings.GRID_RENDER_SCALAR/GridRenderer.subGridSize,
            y * Settings.GRID_RENDER_SCALAR +subY*Settings.GRID_RENDER_SCALAR/GridRenderer.subGridSize,
            Settings.GRID_RENDER_SCALAR/GridRenderer.subGridSize,
            Settings.GRID_RENDER_SCALAR/GridRenderer.subGridSize,
            )
    }

    static DrawGrid(grid) {
        this.ctx.clearRect(0, 0, GridRenderer.canvas.width, GridRenderer.canvas.height);
        for (var x = 0; x < grid.xCount; x++) {
            for (var y = 0; y < grid.yCount; y++) {
                var color = ((x+y)%2==0) ? new Color(1,1,1,0.0) : new Color(1, 1, 1, 0.05)
                
                GridRenderer.DrawGridCell(x, y, color)
            }
        }
    }

    static DrawCell(cell) {
        GridRenderer.SetFillStyleHex(cell.color)
        GridRenderer.DrawGridCell(cell.x, cell.y, cell.color, true)
    }
}



class Raycaster {
    CastRay(orginX, originY, directionX, directionY, interceptionCellsSet) {

    }
}

class Raytracer {

}


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// NUMBER THINGS //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////





function loop(timeStamp)
{
    // Time
    var progress = timeStamp - lastRender
    Time.deltaTime = progress

    // Engine Function Updating
    Engine.Update()
    Input.Update()
    
    // Object Updating
    Update(progress)

    // Drawing
    Draw()
    Engine.Draw()


    /// Debug
    Debug.Update()



    lastRender = timeStamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0


function StartEngine() {
    Engine.Init(new Renderer())
    Input.Init()

    Start()
}


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// DEBUGGING //////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

class Debug {

    static DEBUG_SETTINGS = {
        DISPLAY_FPS: true,
        DISPLAY_OBJECT_COUNT: true,
    }

    static config = {
        objectCountElementID: "object-count-display",
        fpsElementID:"fps-display"
    }

    static DisplayObjectCount() {
        let element = document.getElementById(Debug.config.objectCountElementID)
        let objectCount = Engine.objects.length
        element.innerHTML = "Object Count: " + objectCount
    }

    static DisplayFPS() {
        let element = document.getElementById(Debug.config.fpsElementID)
        let fps = Math.floor(1/(Time.deltaTime/1000))
        element.innerHTML = "FPS: " + fps
    }

    static Update() {
        if (Debug.DEBUG_SETTINGS.DISPLAY_FPS) 
            Debug.DisplayFPS()
        if (Debug.DEBUG_SETTINGS.DISPLAY_OBJECT_COUNT) 
            Debug.DisplayObjectCount()
        
        
    }
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// GAME CODE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// GAME CODE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const Direction = {
    NORHT: [ 0, -1],
    EAST:  [ 1,  0],
    SOUTH: [ 0, 1],
    WEST:  [-1,  0],
    RIGHT: 1,
    LEFT: -1
}

const Settings = {
    GRID_SIZE_X: 10,
    GRID_SIZE_Y: 25,
    GRID_RENDER_SCALAR: 20
}


/// Game Base




class Game {
    static main = null

    constructor ()
    {
        Game.main = this
        
        // Game loop stuff
        this.gameSpeed = 400
        this.currentGameSpeed = this.gameSpeed
        this.timeSinceLastStep = 0

        // Tetris Pice Stuff
        this.t = null
        this.groundCells = []
        this.callNewPice = false
        
        // Movement Stuff
        this.dropNext = false
        this.nextRotation = null
        this.nextMove = null
        
        /// Scorre stuff
        this.scoreElement = document.getElementById("score-text")
        this.score = 0
    }


    ////////////////// Base Stuff

    Init() {
        this.SpawnSet(PICE_DEFINITIONS.L)
        for (var i = 0; i < Settings.GRID_SIZE_X; i++) {
            this.groundCells.push(Engine.CreateObject(TetrisPice, i, Settings.GRID_SIZE_Y-1, new Color(0,0,0,1), true, true))
        }
    }

    ScoreCalculator(numberOfRows) {
        return Math.ceil(Math.pow(numberOfRows, 1.4))
    }

    Update(deltaTime) {


        this.timeSinceLastStep += deltaTime
        if (this.timeSinceLastStep > this.currentGameSpeed) {
            this.TimeStep()
            this.timeSinceLastStep = 0
        }

        
        if (this.dropNext == true) {
            this.t.Drop()
            this.dropNext = false
            this.TimeStep()
        }
        this.t.Slide(this.nextMove)
        this.t.Rotate(this.nextRotation)

        this.nextMove = null
        this.nextRotation = null

    }

    TimeStep() {
        TetrisPice.Step()
        this.t.Step()
        if (this.callNewPice == true) {
            this.SpawnSet()
            this.callNewPice = false
        }

        if (this.t.solidifyNext == true) {
            this.t.Solidify()
            this.SoftDrop(false)
        }
    }

    AddScore(value) {
        this.UpdateScore(this.score + value)
    }

    UpdateScore(value) {
        this.score = value
        this.scoreElement.innerHTML = this.score
    }

    SpawnSet() {
        const index = Math.floor(Math.random()*Object.entries(PICE_DEFINITIONS).length)
        let piceDefinition = Object.entries(PICE_DEFINITIONS)[index][1]
        let piceColor = Object.entries(PICE_COLORS)[index][1]
        this.t = new TetrisSet()
        this.t.Init(5, 3, piceColor, piceDefinition, this)
    }

    SoftDrop(state) {   
        if (state == true) {
            this.currentGameSpeed = this.gameSpeed/8
        }
        if (state == false) {
            this.currentGameSpeed = this.gameSpeed
        }
    }
    SetNextRotation(direction) {
        this.nextRotation = Direction.RIGHT
    }
    MovePiceLeft() {
        this.nextMove = Direction.WEST
    }
    MovePiceRight() {
        this.nextMove = Direction.EAST
    }
    DropSet() {
        this.dropNext = true
    }
}








// Game logic





class TetrisPice extends GridCell {
    static all = []

    static CollidesWithSolid(x, y) {
        if (!(x >= 0 && y >= 0 && x <= Settings.GRID_SIZE_X-1 && y <= Settings.GRID_SIZE_Y-1)) {
            return true
        }
        for (var i = 0; i < TetrisPice.all.length; i++) {
            let pice = TetrisPice.all[i]
            if (pice.solid == false) continue
            if (pice.x == x && pice.y == y) return true
        }
        return false
    }

    static Step() {
        
        let lines = this.GetPicesAsLines()
        let currentStepDown = 0
        let redo = false
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i]
            for (var j = 0; j < line.length; j++) {
                let pice = TetrisPice.all[TetrisPice.GetPiceIndex(line[j])]
                pice.Move(0, currentStepDown)
            }
            if (line.length == Settings.GRID_SIZE_X) {
                currentStepDown += 1
                line.sort()
                for (var j = 0; j < line.length; j++) {
                    TetrisPice.all[TetrisPice.GetPiceIndex(line[j])].Destroy()
                }
            }   
        }

        Game.main.AddScore(Game.main.ScoreCalculator(currentStepDown)*100   )
    }

    static GetPicesAsLines() {
        let lines = []
        for (var i = 0; i < Settings.GRID_SIZE_Y; i++) {
            lines.push([])
        }
        
        for (var i = 0; i < TetrisPice.all.length; i++) {
            let pice = TetrisPice.all[i]
            if (pice.ground == true || pice.solid != true) continue
            lines[Settings.GRID_SIZE_Y - pice.y].push(pice.uuid)
        }

        return lines
    }

    static GetPiceIndex(uuid) {
        for (var i = 0; i < TetrisPice.all.length; i++) {
            if (TetrisPice.all[i].uuid == uuid) return i
        }
        return -1
    }

    Init(x, y, color, solid=false, ground=false) {
        super.Init(x, y)
        this.solid = solid
        this.ground = ground
        this.rendererObject = Engine.CreateObject(GridRendererObject, this, color)
        
        TetrisPice.all.push(this)
    }

    Destroy() {
        for (var i = 0; i < TetrisPice.all.length; i++) {
            if (TetrisPice.all[i].uuid == this.uuid) {
                TetrisPice.all.splice(i, 1)
            }
        }

        this.rendererObject.Destroy()
        super.Destroy()
    }

    TestMove(x, y) {
        for (var i = 0; i < TetrisPice.all.length; i++) {
            let pice = TetrisPice.all[i]
            if (pice.solid == false) continue
            if (TetrisPice.CollidesWithSolid(this.x + x, this.y + y)) {
                return false
            }
        }

        return true
    }
}

class TetrisSet {
    Init(x, y, color, definition, game) {
        this.x = x
        this.y = y
        this.game = game
        this.color = color
        this.definition = definition
        this.definitionIndex = 0
        this.cells = []

        this.dropNext = false
        this.solidifyNext = false

        this.CreateDefinedCells()
    }

    CalculatePicePosition(xo, yo) {
        return [this.x+xo-1, this.y+yo-1]
    }

    CreateDefinedCells() {
        this.cells = []
        let currentDefinition = this.definition[this.definitionIndex % this.definition.length]
        for (var x = 0; x < currentDefinition.length; x++) {
            for (var y = 0; y < currentDefinition[x].length; y++) {
                if (currentDefinition[y][x] == 0) continue
                let pos = this.CalculatePicePosition(x, y)
                this.cells.push(Engine.CreateObject(TetrisPice, pos[0], pos[1], this.color))
            }
        }
    }

    DestroyCells() {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].Destroy()
        }
    }

    MoveCellsDown() {
        if (this.TestMove(0, 1)) {
            this.MoveCells(0,1)
            return true
        } else {
            this.solidifyNext = true
            return false
        }
    }

    Solidify() {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].solid = true
        }
        this.destroy = true
        this.game.callNewPice = true
    }

    Drop() {
        while(this.MoveCellsDown()) {}
    }

    TestMove(x, y) {
        for (var i = 0; i < this.cells.length; i++) {
            if (!this.cells[i].TestMove(x, y)) {
                return false
            }
        }
        return true
    }

    TestRotate(direction) {
        if (direction == Direction.RIGHT)
            this.definitionIndex += 1
        else 
            this.definitionIndex -= 1

        let currentDefinition = this.definition[this.definitionIndex % this.definition.length]
        for (var x = 0; x < currentDefinition.length; x++) {
            for (var y = 0; y < currentDefinition[x].length; y++) {
                if (currentDefinition[y][x] == 0) continue
                let virtualPosition = this.CalculatePicePosition(x, y)
                if (TetrisPice.CollidesWithSolid(virtualPosition[0], virtualPosition[1])) {
                    if (direction == Direction.RIGHT)
                        this.definitionIndex -= 1
                    else 
                        this.definitionIndex += 1
                    return false
                }
            }
        }

        if (direction == Direction.RIGHT)
            this.definitionIndex -= 1
        else 
            this.definitionIndex += 1

        return true
    }

    MoveCells(x,y) {
        this.cells.forEach(element => {
            element.Move(x, y)
        });
    }

    Slide(direction) {
        switch (direction) {
            case Direction.EAST:
                if (this.TestMove(1, 0)) {
                    this.x += 1
                    this.MoveCells(1, 0)   
                }
                break
            case Direction.WEST:
                if (this.TestMove(-1, 0)) {
                    this.x -= 1
                    this.MoveCells(-1, 0)   
                }
                break
        }
    }

    Step() {
        this.y += 1
        this.MoveCellsDown()
    }

    Rotate(direction) {
        if (direction == null) return
        if (this.TestRotate(direction)) {
            this.DestroyCells()
            if (direction == Direction.RIGHT)
                this.definitionIndex += 1
            else 
                this.definitionIndex -= 1
            this.CreateDefinedCells()
        }
    }
}




//// Variables
const PICE_DEFINITIONS = {
    LL: [
        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
    ],

    LR: [
        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ],
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],
    ],

    B: [
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
    ],

    S1: [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0]
        ],
    ],
    
    T: [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]
        ],
    ],

    S2: [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0]
        ],
    ],

    L: [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
    ],

}

const PICE_COLORS = {
    LL: new Color(1,0.5,0,1),
    LR: new Color(0,0.0,1,1),
    B: new Color(1,1,0,1),
    S1: new Color(0,1,0,1),
    T: new Color(0.5,0,0.5,1),
    S2: new Color(1, 0, 0, 1),
    L: new Color(0,1,1,1),
}

var game
var grid


//// Programm Functions

function Start()
{
    const canvas = document.getElementById("game")
    const ctx = canvas.getContext("2d")

    GridRenderer.Init(ctx, canvas)
    Engine.SetRenderer(GridRenderer)

    game = new Game()
    game.Init()

    grid = new Grid(Settings.GRID_SIZE_X, Settings.GRID_SIZE_Y)

    window.requestAnimationFrame(loop) // stat the game loop

    window.addEventListener('keydown', Input.KeyDownEvent, false);
    window.addEventListener('keyup', Input.KeyUpEvent, false);
}

function Update(deltaTime) {
    game.Update(deltaTime)

    if (Input.GetKeyState(Input.KeyCodes.A) == Input.KeyState.PRESSED) {
        game.MovePiceLeft()
    }
    if (Input.GetKeyState(Input.KeyCodes.D) == Input.KeyState.PRESSED) {

        game.MovePiceRight()
    }
    if (Input.GetKeyState(Input.KeyCodes.S) == Input.KeyState.PRESSED) {
        game.SoftDrop(true)
    }
    if (Input.GetKeyState(Input.KeyCodes.S) == Input.KeyState.RELESED) {
        game.SoftDrop(false)
    }
    if (Input.GetKeyState(Input.KeyCodes.W) == Input.KeyState.PRESSED || Input.GetKeyState(Input.KeyCodes.R) == Input.KeyState.PRESSED) {
        game.SetNextRotation(Direction.RIGHT)
    }
    if (Input.GetKeyState(Input.KeyCodes.J) == Input.KeyState.PRESSED) {
        game.DropSet()
    }
    if (Input.GetKeyState(Input.KeyCodes.H) == Input.KeyState.PRESSED) {
        throw Error()  
    }
}

function Draw() {
    Engine.renderer.DrawGrid(grid, 20)
}



// Start game
StartEngine()