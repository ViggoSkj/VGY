function SortingDisplay(arrayRowId, sortingRowId) {
    const arrayRow = document.getElementById(arrayRowId)
    const sortingRow = document.getElementById(sortingRowId)
    let timers = []
    let intervals = []

    const slideDown = () => {
        const children = Array.from(arrayRow.children)
        children.forEach(c => {
            sortingRow.appendChild(c)
        })   
    }

    const sort = () => {
        Array.from(sortingRow.children).forEach(child => {
            const time = Number(child.innerText)*1000

            let currentTime = time/1000.0
            let interval = setInterval(() => {
                if (currentTime < 0) {
                    clearInterval(interval)
                    intervals = intervals.filter(i => i !== interval)
                }
                child.innerText = `${child.getAttribute("data-number")}: ${currentTime.toFixed(1)}s`
                currentTime -= 0.1
            }, 100)
            intervals.push(interval)

            timers.push(setTimeout(() => {
                arrayRow.appendChild(child)
                clearInterval(interval)
                child.innerText = child.innerText.split(":")[0]
            }, time))
        })
    }

    const setNumbers = (numbers) => {
        arrayRow.replaceChildren([])
        sortingRow.replaceChildren([])

        timers.forEach(timer => {
            clearTimeout(timer)
        })
        intervals.forEach(interval => {
            clearInterval(interval)
        })
        intervals = []
        timers = []

        numbers.forEach(n => {
            const element = document.createElement("p")
            element.innerText = n
            element.setAttribute("data-number", n)
            arrayRow.appendChild(element)
        })
    }

    return {
        setNumbers,
        slideDown,
        sort
    }
}