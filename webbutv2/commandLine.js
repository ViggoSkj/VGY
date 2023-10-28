function CommandLine() {
    outputDiv = document.getElementById("output-container")
    textInput = document.getElementById("terminal-input")

    commands = new Map()

    let historyIndex = 0
    let history = []

    const writeToOutput = (text, options) => {
        const newP = document.createElement("p")
        newP.innerText = text
        outputDiv.appendChild(newP)
    }

    const parseCommand = (command) => {
        const split = command.split(" ")
        const prefix = split[0]
        runCommand(prefix.toLowerCase(), split.slice(1))
    }

    const runCommand = (prefix, args) => {
        historyIndex = 0
        const command = commands.get(prefix)
        if (!command) {
            return alert(`command "${prefix}" dose not exist in this current context.`)
        }
        command.command(args)
    }

    const clear = () => {
        outputDiv.innerText = ""
    }

    const alert = (message) => {
        writeToOutput(message)
    }

    const logUnexpected = () => {
        writeToOutput("Somthing when wrong.")
    }

    const addCommand = (prefix, command, help) => {
        commands.set(prefix, { command, help })
    }

    const addAlias = (alias, command) => {
        if (!commands.has(command)) {
            return console.error(`cannot set alias to command "${command} since it dose not exist."`)
        }
        commands.set(alias, commands.get(command))
    }

    const getHistory = (index) => {
        return history[history.length - 1 - index] || ""
    }

    const addHistory = (command) => {
        command.length > 0 && history.push(command)
    }

    textInput.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            parseCommand(textInput.value)
            addHistory(textInput.value)
            textInput.value = ""
        }
    })

    textInput.addEventListener("keydown", e => {
        if (e.key === "ArrowUp") {
            e.preventDefault()
            textInput.value = getHistory(historyIndex)
            historyIndex++
        }
    })

    return {
        get commands() {
            return Array.from(commands.keys())
        },
        get commandMap() {
            return commands
        },
        alert,

        addCommand,
        addAlias,

        logUnexpected,
        clear
    }
}

const commandLine = CommandLine()

commandLine.addCommand("ping", async (args) => {
    if (args[0] === "server") {
        try {
            const response = await fetch("http://127.0.0.1:8000/ping", {
                method: "POST"
            })

            const text = await response.text()

            if (response.status === 200) {
                commandLine.alert(`Server: ${text}`)
            } else {
                commandLine.logUnexpected()
            }
        } catch (err) {
            commandLine.logUnexpected()
        }
        return
    }

    commandLine.alert("pong")
})

commandLine.addCommand("home", (args) => {
    if (location.host === "localhost") {
        location.href = "/VGY/webbutv2/index.php"
    } else if (location.host = "labb.vgy.se") {
        location.href = "https://labb.vgy.se/~viggosg/webbutv2/"
    }
})

commandLine.addCommand("tc", async (args) => {
    try {
        const response = await fetch("http://127.0.0.1:8000", {
            method: "POST"
        })

        if (response.status === 200) {
            commandLine.alert("Connection to the server is working.")
        } else {
            commandLine.alert("Somthing is wrong with the server.")
        }
    } catch (err) {
        commandLine.alert("No connection to the server could be made.")
    }
})

commandLine.addCommand("run", async (args) => {
    try {
        const r = eval(args.join(" "))
        commandLine.alert(r)
    } catch (err) {
        commandLine.alert(err)
    }
})

commandLine.addCommand("echo", async (args) => {
    commandLine.alert(args.join(" "))
})

commandLine.addCommand("clear", async (args) => {
    commandLine.clear()
}, "clears the console")

commandLine.addCommand("help", async (args) => {
    if (args[0]) {
        const command = commandLine.commandMap.get(args[0])
        if (!command) {
            return alert(`there is no command "${argfs[0]}"`)
        }
        commandLine.alert(command.help)
    } else {
        commandLine.alert(commandLine.commands.sort().join(", "))
    }
})

commandLine.addAlias("commands", "help")



const oldLog = console.log
console.log = (info) => {
    commandLine.alert("console: " + info)
    oldLog(info)
}

const oldError = console.error
console.error = (info) => {
    commandLine.alert("console: " + info)
    oldError(info)
}