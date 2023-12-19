

///////////////////// Utility

// own implementation of slider (value always range from 0 to 1)
function Slider(sliderElement, barElement, handleElement) {
    let holding = false
    let xPosition = 0

    const updateSlider = () => {
        handleElement.style.left = xPosition - barElement.offsetWidth / 2 + "px"
    }

    const setValue = (v) => {
        xPosition = v * barElement.offsetWidth
        updateSlider()
        sliderElement.dispatchEvent(new CustomEvent("slide", {
            detail: {
                barElement,
                handleElement,
                value: xPosition / barElement.offsetWidth,
                user: false
            }
        }))
    }

    handleElement.addEventListener("mousedown", () => {
        holding = true
    })
    window.addEventListener("mouseup", () => {
        holding = false
    })

    window.addEventListener("mousemove", e => {
        if (holding) {
            e.preventDefault()
            xPosition += e.movementX
            xPosition = Math.min(Math.max(xPosition, 0), barElement.offsetWidth)
            updateSlider()
            sliderElement.dispatchEvent(new CustomEvent("slide", {
                detail: {
                    barElement,
                    handleElement,
                    value: xPosition / barElement.offsetWidth,
                    user: true
                }
            }))
        }
    })
    updateSlider()

    return {
        get value() { return xPosition / barElement.offsetWidth },
        get mouseDown() { return holding },
        setValue
    }
}

// formats a time (seconds) to minutes:seconds
function timeFormat(time) {
    return new Date(time * 1000).toTimeString().slice(3, 8)
}






/////////////////// Logic


/// Audio Controller

const slider = Slider(document.getElementById("volume-slider"), document.getElementById("volume-slider-bar"), document.getElementById("volume-slider-handle"))

function setupAudioControlls() {
    const timestampElement = document.getElementById("timestamp")
    const updateTimestamp = () => {
        if (!audioPlayer.gotAudioContext || !audioPlayer.gotTrack)
            return
        const current = audioPlayer.audioCurrentDuration
        const duration = audioPlayer.audioDuration
        timestampElement.innerText = `${timeFormat(current)} / ${timeFormat(duration)}`
    }

    const updateSlider = () => {
        if (!audioPlayer.gotAudioContext || !audioPlayer.gotTrack)
            return
        if (slider.mouseDown)
            return
        slider.setValue(audioPlayer.audioCurrentDuration / audioPlayer.audioDuration)
    }

    // icon row
    document.getElementById("link-button").addEventListener("click", e => {
        navigator.clipboard.writeText(window.location.href)
    })
    document.getElementById("manuscript-button").addEventListener("click", e => {
        document.getElementById("manuscript").style.display = "block"
    })
    document.getElementById("close-manuscript-button").addEventListener("click", e => {
        document.getElementById("manuscript").style.display = "none"
    })

    // timestamp
    setInterval(updateTimestamp, 333)
    setInterval(updateSlider, 333)

    // slider
    document.getElementById("volume-slider").addEventListener("slide", e => {
        if (e.detail.user)
            audioPlayer.setCurrentDuration(e.detail.value * audioPlayer.audioDuration)
    })

    // fast forward/backward
    const forwadButton = document.getElementById("forward")
    const backwardButton = document.getElementById("backward")

    forwadButton.addEventListener("click", e => {
        audioPlayer.traverseAudio(5)
        updateTimestamp()
    })
    backwardButton.addEventListener("click", e => {
        audioPlayer.traverseAudio(-5)
        updateTimestamp()
    })
}

// play button events wich initats all audio related functionality, it has to since browsers may not allow the creation of audio plying things before an interaction
const audioPlayer = AudioPlayer()
const playButton = document.getElementById("play-button")
playButton.addEventListener("click", e => {
    // initialize the audioPlayer if it is not
    if (!audioPlayer.gotAudioContext) {
        audioPlayer.createContext()
    }

    // apply the audio track if it have not done that
    if (!audioPlayer.gotTrack) {
        audioPlayer.loadTrack(document.getElementById("audio"))
        setupAudioControlls(slider)
    }

    audioPlayer.togglePause()
    if (audioPlayer.paused) {
        playButton.setAttribute("paused", "")
    } else {
        playButton.removeAttribute("paused")
    }
})

