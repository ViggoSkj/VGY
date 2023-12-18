const audioPlayer = AudioPlayer()

const timestampElement = document.getElementById("timestamp")
function updateTimestamp() {
    const current = audioPlayer.audioCurrentDuration
    const duration = audioPlayer.audioDuration
    timestampElement.innerText = `${timeFormat(current)} / ${timeFormat(duration)}`
}

// formats a time (seconds) to minutes:seconds
function timeFormat(time) {
    return new Date(time * 1000).toTimeString().slice(3, 8)
}


// creates the functionality for the controlls
function setupOtherControlls() {
    document.getElementById("link-button").addEventListener("click", e => {
        navigator.clipboard.writeText(window.location.href)
    })

    document.getElementById("manuscript-button").addEventListener("click", e => {
        document.getElementById("manuscript").style.display = "block"
    })
    document.getElementById("close-manuscript-button").addEventListener("click", e => {
        document.getElementById("manuscript").style.display = "none"
    })
}
// needs user interaction to be able to be run
function setupAudioControlls() {
    // timestamp
    setInterval(updateTimestamp, 333)

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

// play button events wich initats all audio related functionality
const playButton = document.getElementById("play-button")
playButton.addEventListener("click", e => {
    if (!audioPlayer.gotAudioContext) {
        audioPlayer.createContext()
    }
    
    if (!audioPlayer.gotTrack) {
        audioPlayer.loadTrack(document.getElementById("audio"))
        setupAudioControlls()
    }
    
    audioPlayer.togglePause()
    if (audioPlayer.paused) {
        playButton.setAttribute("paused", "")
    } else {
        playButton.removeAttribute("paused")
    }
})

setupOtherControlls()