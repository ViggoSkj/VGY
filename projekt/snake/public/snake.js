/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// GAME ENGINE ////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

/// Util

class Util {
    static uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
}

// Engine
class Engine {
    static renderer = null;
    static objects = []

    static destroyBuffer = []
    static newObjectBuffer= []

    /// Core functions
    static Init(renderer) {
        Engine.renderer = renderer
    }

    static InitializeObject(object) {
        object.Init()
    }

    static UpdateObject(object) {
        object.Update()
    }

    static Update() {
        // Destroy objects in buffer
        for (var i = 0; i < Engine.destroyBuffer.length; i++) {
            Engine.objects.splice(Engine.GetObjectIndex(Engine.destroyBuffer[i].uuid), 1)
        }

        Engine.destroyBuffer = []

        // Update all object
        for (var i = 0; i < Engine.objects.length; i++) {
            Engine.UpdateObject(this.objects[i])
        }
    }

    static Draw() {
        for (var i= 0; i < this.objects.length; i++) {
            this.objects[i].Draw()
        }
    }

    /// Interface function
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

    static SetRenderer(renderer) {
        this.renderer = renderer
    }

    /// Object Class interface functions

    static DestroyObject(object) {
        this.destroyBuffer.push(object)
    }
}


/// Time Stuff
class Time {
    static deltaTime = 0
}


/// Object

class Object {
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


/// Input

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

class Renderer {
    static Init(ctx) {
        Renderer.ctx = ctx
    }

    static SetFillStyleHex(hex) {
        Renderer.ctx.fillStyle = hex
    }

    static DrawSquare(x, y, width, height) {
        Renderer.ctx.fillRect(x, y, width, height)
    }
}




/// Number Translator

class Transformation extends Object{
    Init(stransformationTime) {
        this.timeSinceStart = 0
        this.stransformationTime = stransformationTime
    }

    Update() {
        this.timeSinceStart += Time.deltaTime
    }
}

class IntegerTransformation {
    constructor() {

    }
}



function loop(timeStamp)
{
    var progress = timeStamp - lastRender

    Time.deltaTime = progress

    Engine.Update()

    Input.Update()
    Update(progress)
    Draw()
    Engine.Draw()

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
    static config = {
        objectCountElementID: "object-count-display",
        fpsElementID:"fps-display"
    }

    static DisplayObjectCount() {
        var element = document.getElementById(Debug.config.objectCountElementID)
        var objectCount = Engine.objects.length
        element.innerHTML = "Object Count: " + objectCount
    }

    static DisplayFPS() {
        var element = document.getElementById(Debug.config.objectCountElementID)
        var fps = Math.floor(1/(Time.deltaTime/1000))
        element.innerHTML = "FPS: " + fps
    }
}





/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// GAME LOGIC /////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////





const Direction = {
    NORHT: [ 0, -1],
    EAST:  [ 1,  0],
    SOUTH: [ 0, 1],
    WEST:  [-1,  0],
}

const Settings = {
    GRID_SIZE: 25,
    GRID_RENDER_SCALAR: 20
}


/// Game Base

class Game {
    constructor ()
    {
        this.snake = undefined
        this.food = []
        this.timeSinceLastStep = 0
    }

    Init() {
        this.snake = Engine.CreateObject(SnakeHead,  Math.floor(Settings.GRID_SIZE/2), Math.floor(Settings.GRID_SIZE/2))
        this.food = []
        this.SpawnFood()
    }

    Update(deltaTime) {
        this.timeSinceLastStep += deltaTime
        if (this.timeSinceLastStep > 100) {
            this.TimeStep()
            this.timeSinceLastStep = 0
        }
    }

    TimeStep() {
        this.snake.Step()
        this.SnakeCollisions()
    }

    SpawnFood() {
        var blacklist = []
        this.food.push(Food.CreateRandomFood(Settings.GRID_SIZE, Settings.GRID_SIZE, blacklist))
    }

    SnakeCollisions() {
        for (var i = 0; i < this.food.length; i++) {
            if (this.snake.CollidesWith(this.food[i]))  {
                this.food[i].Destroy()
                this.food.splice(i,1)
                this.snake.AddBodyPart()
                this.SpawnFood()
            }
        }
        for (var i = 0; i < this.snake.body.length; i++) {
            if (this.snake.CollidesWith(this.snake.body[i]))  {
                this.Reset()
                this.Init()
            }
        }

        if (!this.snake.IsInArea(0, 0, Settings.GRID_SIZE - 1, Settings.GRID_SIZE - 1)) {
            this.Reset()
            this.Init()
        }
    }

    Reset() {
        this.food.forEach(element => {
            element.Destroy()
        });

        this.snake.Destroy()
    }
}

class Grid {
    constructor (xCount, yCount) {
        this.xCount = xCount
        this.yCount = yCount
    }
}



/// Game Rendering

class SnakeRenderer extends Renderer {
    static Init(ctx) {
        console.log(1)
        super.Init(ctx)
    }

    static DrawGridCell(x, y) {
        SnakeRenderer.DrawSquare(x * Settings.GRID_RENDER_SCALAR, y * Settings.GRID_RENDER_SCALAR, Settings.GRID_RENDER_SCALAR, Settings.GRID_RENDER_SCALAR)
    }

    static DrawGrid(grid) {
        for (var x = 0; x < grid.xCount; x++) {
            for (var y = 0; y < grid.yCount; y++) {
                var color = ((x+y)%2==0) ? "#FAFAFA" : "#DDDDDD"
                SnakeRenderer.SetFillStyleHex(color)
                SnakeRenderer.DrawGridCell(x, y)
            }
        }
    }

    static DrawCell(cell) {
        SnakeRenderer.SetFillStyleHex(cell.color)
        SnakeRenderer.DrawGridCell(cell.x, cell.y)
    }

    static DrawSnake(snake) {
        SnakeRenderer.DrawCell(snake)
        for (var i = 0; i < snake.body.length; i++) {
            SnakeRenderer.DrawCell(snake.body[i])
        }
    }

    static DrawFood(foodArray) {
        foodArray.forEach(food => {
            SnakeRenderer.DrawCell(food)
        });
    }
}



// Game logic


class Cell extends Object {
    Init(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }

    SetPosition(x, y) {
        this.x = x
        this.y = y
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

class Food extends Cell{
    static CreateRandomFood(maxX, maxY, blacklist=[]) {
        var x = Math.floor(Math.random()*maxX)
        var y = Math.floor(Math.random()*maxY)

        if ([x, y] in blacklist) return this.CreateRandomFood(maxX, maxY, blacklist)

        return Engine.CreateObject(Food, x, y)
    }

    Init(x, y) {
        super.Init(x, y, "#FF0000")
    }
}

class SnakeBodyPart extends Cell {
    Init(x, y, front) {
        super.Init(x, y, "#00FF00")
        this.front = front
        this.prevPosition
    }

    MoveForward () {
        this.SetPosition(this.front.x, this.front.y)
        if (this.front instanceof SnakeBodyPart) {
            this.front.MoveForward()
        }
    }
}

class SnakeHead extends Cell {
    Init(x, y) {
        super.Init(x, y, "#0000FF")
        this.body = []
        this.timeSinceLastStep = 0
        this.prevPosition = [x-1, y]
        this.movingDirection = Direction.EAST
        this.nextMovingDirection = Direction.EAST
        this.AddBodyPart()
    }

    Step() {
        this.movingDirection = this.nextMovingDirection
        this.Move(this.movingDirection)
    }

    SetMovingDirection(dir) {
        if (this.movingDirection[0] == -dir[0] || this.movingDirection[1] == -dir[1]) return
        this.nextMovingDirection = dir
    }

    Move(dir) {
        this.prevPosition = [this.x, this.y]
        if (this.body.length != 0) {
            this.body[this.body.length-1].MoveForward()
        }
        this.SetPosition(this.x + dir[0], this.y + dir[1])
    }

    Destroy() {
        this.body.forEach(element => {
            element.Destroy()
        });
        super.Destroy()
    }

    AddBodyPart() {
        if (this.body.length == 0) {
            this.body.push(Engine.CreateObject(SnakeBodyPart,this.prevPosition[0], this.prevPosition[1], this))
        }
        else {
            var newPart = Engine.CreateObject(SnakeBodyPart, this.prevPosition[0], this.prevPosition[1], this.body[this.body.length-1])
            this.body.push(newPart)
        }
    }
}



//// Variables
var game
var grid


//// Programm Functions

function Start()
{
    const canvas = document.getElementById("game")
    const ctx = canvas.getContext("2d")



    SnakeRenderer.Init(ctx)
    Engine.SetRenderer(SnakeRenderer)

    game = new Game()
    game.Init()

    grid = new Grid(Settings.GRID_SIZE, Settings.GRID_SIZE)

    window.requestAnimationFrame(loop) // stat the game loop

    window.addEventListener('keydown', Input.KeyDownEvent, false);
    window.addEventListener('keyup', Input.KeyUpEvent, false);
}

function Update(deltaTime) {
    Debug.DisplayObjectCount()
    Debug.DisplayFPS()

    game.Update(deltaTime)

    if (Input.GetKeyState(Input.KeyCodes.W) == Input.KeyState.PRESSED) {
        game.snake.SetMovingDirection(Direction.NORHT)
    }
    if (Input.GetKeyState(Input.KeyCodes.D) == Input.KeyState.PRESSED) {
        game.snake.SetMovingDirection(Direction.EAST)
    }
    if (Input.GetKeyState(Input.KeyCodes.S) == Input.KeyState.PRESSED) {
        game.snake.SetMovingDirection(Direction.SOUTH)
    }
    if (Input.GetKeyState(Input.KeyCodes.A) == Input.KeyState.PRESSED) {
        game.snake.SetMovingDirection(Direction.WEST)
    }
}

function Draw() {
    Engine.renderer.DrawGrid(grid, 20)
}



// Start game
StartEngine()